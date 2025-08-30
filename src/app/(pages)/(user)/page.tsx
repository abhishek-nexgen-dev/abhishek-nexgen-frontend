import Hero_Sec from '@/features/Home/v1/Section/Hero_Sec';
import Expression_With_Sec from '@/features/Home/v1/Section/Expression_With_Sec';
import Project_Category_Sec from '@/features/Home/v1/Section/Project_Category_Sec';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero_Sec />
      <Expression_With_Sec />
      <Project_Category_Sec />
    </div>
  );
}
