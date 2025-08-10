const apiUrl = `/api/Datas`;

const parseJSON = async (res) => {
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const fetchDatas = (apiUrl) =>
  fetch(apiUrl, { mode: 'cors' }).then(parseJSON);

export const createData = (apiUrl, data) =>
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',

    body: JSON.stringify(data),
  }).then(parseJSON);

export const updateData = (apiUrl, id, data) =>
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',

    body: JSON.stringify(data),
  }).then(parseJSON);

export const deleteData = (apiUrl, id) =>
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error('Delete failed');
    return true;
  });
