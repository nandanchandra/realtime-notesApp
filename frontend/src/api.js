const url = 'http://0.0.0.0:8000/api/';

export const fetchNotes = async () => {
  return fetch(url, {})
    .then(res => res.json())
    .then(data => {
      return data
    });
}

export const fetchNote = (id) => {
  return fetch(`${url + id}`, {})
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export const addNote = (note) => {
    fetch(url, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })

    return note;
}

//  TODO: Add PATCH
export const updateNote = (note) => {
    console.log('Updating!');
    console.log('Update A Note with id', note.id);
}