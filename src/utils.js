  // Calculate ratings average
export  const getRatingAverage = (checkins) => {
    const ratingSum = checkins.reduce((acc, station, index, arr) => {

      return station.rating + acc;
    }, 0);
  
    const ratingAverage = ratingSum / checkins.length;
	
	return ratingAverage;
  }