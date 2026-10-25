const fs = require('fs/promises');
const { supabase } = require('../config/supabaseClient');

async function uploadFile(file) {
  try {
    console.log("Reading file from temp path:", file.path);
    const fileBuffer = await fs.readFile(file.path);
    const supabasePath = `uploads/${Date.now()}_${file.originalname}`;

    console.log("Uploading to Supabase at path:", supabasePath);
    const { data, error } = await supabase.storage
      .from('gallery')
      .upload(supabasePath, fileBuffer, {
        contentType: file.mimetype,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from('gallery')
      .getPublicUrl(supabasePath);

    const publicUrl = publicUrlData.publicUrl;
    console.log("Public URL generated:", publicUrl);

    try {
      await fs.unlink(file.path);
    } catch (unlinkErr) {
      console.error('Failed to delete temp file:', unlinkErr);
    }

    return publicUrl;
  } catch (err) {
    console.error("Error in uploadFile:", err);
    throw err;
  }
}

module.exports = { uploadFile };