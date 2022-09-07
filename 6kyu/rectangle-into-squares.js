function sqInRect(lng, wdth){
  if (lng === wdth) {
    return null;
  }
  let res = [];
  while (lng > 0 && wdth > 0) {
    lng > wdth ? res.push(wdth) : res.push(lng);
    lng > wdth ? lng -= wdth : wdth -= lng;
  }
  return res;
}
