// fetchVehicles.js
import supabase from './supabaseClient';

export const fetchVehicles = async () => {
  try {
    const { data, error } = await supabase
      .from('vehicles') // table name
      .select('*'); // select all columns

    if (error) {
      throw error;
    }

    return data; // returns the fetched data
  } catch (error) {
    console.error('Error fetching vehicles:', error.message);
    return null; // return null or handle the error as needed
  }
};

export const fetchVehicleById = async (id) => {
  const { data, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching vehicle:', error);
    return null;
  }

  return data;
};