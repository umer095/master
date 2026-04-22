import TopicsSection from "./TopicSection";

const CourseContent = ({ course }) => {
  return (
    <div className="bg-[#fbfbfb] min-h-screen px-20">

      {/* 🔥 TOP TITLE */}
      <div className="px-6 lg:px-12 mx-2 py-6 border-0 border-white-300">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#272425]">
          {course.title}
        </h1>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-120px)]">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 lg:h-full lg:overflow-y-auto mx-2">
          <img
            src={course.image}
            alt="course"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <TopicsSection topics={course.topics} />

      </div>
    </div>
  );
};

export default CourseContent;