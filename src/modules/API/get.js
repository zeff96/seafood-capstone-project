import { getSeaFoodUrl, likesUrl } from "../getApi";

export const getMeals = async () => {
  const res =  await fetch(getSeaFoodUrl);
  const data =  await res.json();

  if (!res.ok) return undefined;

  return data;
}

export const getLikes = async () => {
  const likes = await fetch(likesUrl);
  const response = await likes.json();

  if (!likes.ok) return undefined;

  return response;
}

export const postLikes = async (id) => {
  const likes = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    })
  });
  const response = await likes.json();

  if (!likes.ok) return undefined;

  return response;
}