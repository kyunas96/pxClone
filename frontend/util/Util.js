export const isEmpty = object => (
  Object.keys(object).length === 0
)

export const capitalize = string => (
  string[0].toUpperCase() + string.slice(1)
)

export const formatLocation = (city, country) => {
  if(city && country){
    return city + ", " + country;
  }else if(city){
    return city
  }else if(country){
    return country;
  }else{
    return "";
  }
}