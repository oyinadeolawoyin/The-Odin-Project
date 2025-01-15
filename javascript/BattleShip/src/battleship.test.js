const { ship, gameBoard } = require ("./battleship");

let myship = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let board = [ 
              ["A1"], ["A2"], ["A3"], ["A4"], ["A5"],
              ["B1"], ["B2"], ["B3"], ["B4"], ["B5"],
              ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
              ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
              ["E1"], ["E2"], ["E3"], ["E4"], ["E5"]
            ]

let board2 = [ 
               ["A1"], ["A2"], ["A3"], ["A4"], ["A5"],
               ["B1"], ["B2"], ["B3", "Carrier"], ["B4"], ["B5"],
               ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
               ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
               ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Battleship"]
            ]

test('carrier must equal {ship: { Carrrier: 4, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 }, status: true}', () => {
    expect(ship(myship).hit("Carrier")).toEqual({ship: { Carrier: 4, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 }, status: true});
});

test('battleship must equal {ship: { Carrrier: 5, Battleship: 3, Cruiser: 3, Submarine: 3, Destroyer: 2 }, status: true}', () => {
    expect(ship(myship).hit("Battleship")).toEqual({ship: { Carrier: 4, Battleship: 3, Cruiser: 3, Submarine: 3, Destroyer: 2 }, status: true});
});

test('destroyer must equal {ship: { Carrrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 1 }, status: true})', () => {
    expect(ship(myship).hit("Destroyer")).toEqual({ship: { Carrier: 4, Battleship: 3, Cruiser: 3, Submarine: 3, Destroyer: 1 }, status: true});
});

test('submarine must equal {ship: { Carrrier: 5, Battleship: 4, Cruiser: 3, Submarine: 2, Destroyer: 2 }, status: true}', () => {
    expect(ship(myship).hit("Submarine")).toEqual({ship: { Carrier: 4, Battleship: 3, Cruiser: 3, Submarine: 2, Destroyer: 1 }, status: true});
});

test('cruiser must equal {ship: { Carrrier: 5, Battleship: 4, Cruiser: 2, Submarine: 3, Destroyer: 2 }, status: true}', () => {
    expect(ship(myship).hit("Cruiser")).toEqual({ship: { Carrier: 4, Battleship: 3, Cruiser: 2, Submarine: 2, Destroyer: 1 }, status: true});
});


test('A1 must equal false', () => {
    expect(ship(myship).hit("A1")).toBeFalsy();
});

test('isSunk shoud be false', () => {
    expect(ship(myship).isSunk()).toBeFalsy();
});

test('isSuck() must equal true', () => {
    expect(ship({ Carrier: 0, Battleship: 0, Cruiser: 0, Submarine: 0, Destroyer: 0 }).isSunk()).toBeTruthy();
});

test('Board must have Carrier at element 13', () => {
    expect(ship(myship).laidShip(12, "Carrier", board)).toEqual( [ 
              ["A1"], ["A2"], ["A3"], ["A4"], ["A5"],
              ["B1"], ["B2"], ["B3"], ["B4"], ["B5"],
              ["C1"], ["C2"], ["C3", "Carrier"], ["C4"], ["C5"],
              ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
              ["E1"], ["E2"], ["E3"], ["E4"], ["E5"]
            ]);
});

test('Board must have Submarine at element 25', () => {
    expect(ship(myship).laidShip(24, "Submarine", board)).toEqual( [ 
              ["A1"], ["A2"], ["A3"], ["A4"], ["A5"],
              ["B1"], ["B2"], ["B3"], ["B4"], ["B5"],
              ["C1"], ["C2"], ["C3", "Carrier"], ["C4"], ["C5"],
              ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
              ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Submarine"]
            ]);
});

test('Board must have Miss at element B4', () => {
    expect(gameBoard().receiveAttack("B4", board2, myship)).toEqual( [ 
        ["A1"], ["A2"], ["A3"], ["A4"], ["A5"],
        ["B1"], ["B2"], ["B3", "Carrier"], ["B4", "Miss"], ["B5"],
        ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
        ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
        ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Battleship"]
     ]); 
});

test('Board must have Miss at element A1', () => {
    expect(gameBoard().receiveAttack("A1", board2, myship)).toEqual( [ 
        ["A1", "Miss"], ["A2"], ["A3"], ["A4"], ["A5"],
        ["B1"], ["B2"], ["B3", "Carrier"], ["B4", "Miss"], ["B5"],
        ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
        ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
        ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Battleship"]
     ]); 
});


test('Board must have Hit at element B3', () => {
    expect(gameBoard().receiveAttack("B3", board2, myship)).toEqual( [ 
        ["A1", "Miss"], ["A2"], ["A3"], ["A4"], ["A5"],
        ["B1"], ["B2"], ["B3", "Hit"], ["B4", "Miss"], ["B5"],
        ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
        ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
        ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Battleship"]
     ]); 
});

test('Board must have Hit at element E5', () => {
    expect(gameBoard().receiveAttack("E5", board2, myship)).toEqual( [ 
              ["A1", "Miss"], ["A2"], ["A3"], ["A4"], ["A5"],
              ["B1"], ["B2"], ["B3", "Hit"], ["B4", "Miss"], ["B5"],
              ["C1"], ["C2"], ["C3"], ["C4"], ["C5"],
              ["D1"], ["D3"], ["D4"], ["D5"], ["D6"],
              ["E1"], ["E2"], ["E3"], ["E4"], ["E5", "Hit"]
            ]); 
});

test('Board must sunk', () => {
    expect(gameBoard().receiveAttack("E5", board2, { Carrier: 0, Battleship: 0, Cruiser: 0, Submarine: 0, Destroyer: 0 })).toBe("It's sunk");
});