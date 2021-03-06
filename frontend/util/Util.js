export const isEmpty = (object) => Object.keys(object).length === 0;

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

export const formatLocation = (city, country) => {
  if (city && country) {
    return city + ", " + country;
  } else if (city) {
    return city;
  } else if (country) {
    return country;
  } else {
    return "";
  }
};

export const getPostShowNavIndices = (curPostId, posts) => {
  let curPostIndex;
  for(let i = 0; i < posts.length; i++){
    const temp = posts[i];
    if ((temp.id === curPostId)) {
      curPostIndex = i;
      break;
    }
  }
  const prevPosId = posts[curPostIndex - 1];
  const nextPosId = posts[curPostIndex + 1];


  return {
    prevPostId: prevPosId && prevPosId.id,
    nextPostId: nextPosId && nextPosId.id
  };
};
