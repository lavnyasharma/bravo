import supabase from './supabaseClient';

// Fetch all vehicles
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

// Fetch a single vehicle by ID
export const fetchVehicleById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data; // return the fetched vehicle
  } catch (error) {
    console.error('Error fetching vehicle:', error.message);
    return null; // return null or handle the error as needed
  }
};

// Delete a vehicle by ID
export const deleteVehicle = async (id) => {
  try {
    const { error } = await supabase
      .from('vehicles') // table name
      .delete()
      .eq('id', id); // delete where id matches

    if (error) {
      throw error;
    }

    console.log(`Vehicle with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting vehicle:', error.message);
  }
};
