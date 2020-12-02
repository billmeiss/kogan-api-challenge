function findCubicWeight({ height, width, length }) {
  const cubicCentimeters = height * width * length;

  // convert from cm^3 to m^3
  const cubicMeters = cubicCentimeters / 1000000;
  
  const cubicWeight = cubicMeters * 250;
  return cubicWeight;
}

export default function averageCubicWeight(objects) {
  const weights = objects.map(object => findCubicWeight(object.size));
  const { length } = weights;
  const sum = weights.reduce((a, b) => a + b, 0);
  const avg = sum / length;
  return avg;
}
