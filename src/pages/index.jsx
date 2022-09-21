import { Nav } from '../components/Nav';
import { FindProperty } from '../components/FindProperty';
import { KnowMore } from '../components/KnowMore';

export default function Home() {
  return (
        <>
          <Nav />
          <FindProperty />
          <KnowMore />
        </>
  );
}
