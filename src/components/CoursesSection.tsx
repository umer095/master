import courseUiux from "@/assets/course-uiux.jpg";
import courseFsd from "@/assets/course-fsd.jpg";
import courseDm from "@/assets/course-dm.jpg";
import courseDa from "@/assets/course-da.jpg";
import courseBa from "@/assets/course-ba.jpg";
import courseDs from "@/assets/course-ds.jpg";

const courses = [
  { img: courseUiux, title: "UI/UX Design & Development" },
  { img: courseFsd, title: "Full Stack Development" },
  { img: courseDm, title: "Digital Marketing" },
  { img: courseDa, title: "Data Analytics" },
  { img: courseBa, title: "Business Analytics" },
  { img: courseDs, title: "Data Science" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            Popular Training & Internships We{" "}
            <span className="text-primary">Provide</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border group cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={512}
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-heading font-bold text-card-foreground">
                  {course.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/training" className="btn-gold">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
