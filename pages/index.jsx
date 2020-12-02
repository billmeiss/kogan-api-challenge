import averageCubicWeight from '../lib/cubicWeight';
import fetchAllObjects from '../lib/fetch';

export default function Home({ objects }) {
  const averageWeight = averageCubicWeight(objects);
  return (
    <div className="text-center py-20">
      <p className="font-semibold">
        Average Cubic Weight for Air Conditioners is
      </p>
      <p className="font-bold py-5">
        {averageWeight} kg
      </p>
      <p className="py-20 text-sm font-semibold">I look forward to hearing your feedback! - Stefan</p>
    </div>
  );
}

export async function getStaticProps() {
  // create an array to store the objects
  const objects = [];
  // manipulate the array to recursively add objects in the api
  await fetchAllObjects(objects, '/api/products/1');
  // filter air conditioners in the objects array
  const airConditioners = objects.filter(obj =>
    obj.category === 'Air Conditioners',
  );
  return {
    props: {
      objects: airConditioners,
    },
  };
}
