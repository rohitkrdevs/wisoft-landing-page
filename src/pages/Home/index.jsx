import { useRef, useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

function scrollTestimonials(direction) {
  const container = document.getElementById('testimonials-scroll');
  const scrollAmount = 420; // Adjust based on card width + gap

  if (container) {
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }
}
function scrollProjects(direction) {
  const scrollAmount = 460 + 24; // card width + gap

  if (direction === 'left') {
    scrollRef.current.scrollLeft -= scrollAmount;
  } else {
    scrollRef.current.scrollLeft += scrollAmount;
  }
}

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });

  const services = [
    {
      icon: '/images/img_group.svg',
      title: "Leasing and Management of Other People\'s Property",
    },
    {
      icon: '/images/img_group_lime_800_01.svg',
      title: 'Real Estate Management Supervision Services',
    },
    {
      icon: '/images/img_group_lime_800_01_96x96.svg',
      title: 'Real Estate Buying & Selling Brokerage',
    },
    {
      icon: '/images/img_group_96x96.svg',
      title: 'Leasing Property Brokerage Agents',
    },
    {
      icon: '/images/img_group_1.svg',
      title: 'Facilities Management Services',
    },
    {
      icon: '/images/img_group_2.svg',
      title: 'Buying and Selling of Own Real Estate',
    },
    {
      icon: '/images/img_group_3.svg',
      title: 'Others Letting and Operating of own or Leased Real Estate',
    },
    {
      icon: '/images/img_group_4.svg',
      title: 'Real Estate Agencies',
    },
    {
      icon: '/images/img_group_5.svg',
      title: 'Management of real estate on a fee or contract basis',
    },
  ];

  const projects = [
    {
      id: 1,
      image: '/images/img_d9965403_4aea_4.png',
      title: 'Accommodation 1',
      location: 'Jabel Ali1, Dubai',
      rooms: '113 Rooms',
      area: '230 SqFt',
      category: 'Labour camp',
    },
    {
      id: 2,
      image: '/images/img_07bc5219_9ba9_4.png',
      title: 'Accommodation 2',
      location: 'Jabel Ali 2, Dubai',
      rooms: '295 Rooms',
      area: '230 SqFt',
      category: 'Labour camp',
    },
    {
      id: 3,
      image: '/images/img_afdb831c_76fb_4.png',
      title: 'Accommodation 3',
      location: 'Jabelpur 3, Dubai',
      rooms: '200 Rooms',
      area: '230 SqFt',
      category: 'Labour camp',
    },
    {
      id: 4,
      image: '/images/img_0db8aec6_eb5c_4.png',
      title: 'Accommodation 4',
      location: 'JABEL Ali, 4 Dubai',
      rooms: '57 Rooms',
      area: '230 SqFt',
      category: 'Labour camp',
    },
  ];

  const clients = [
    '/images/img_1.png',
    '/images/img_2.png',
    '/images/img_3.png',
    '/images/img_4.png',
    '/images/img_5.png',
    '/images/img_6.png',
    '/images/img_7.png',
    '/images/img_8.png',
    '/images/img_9.png',
    '/images/img_10.png',
  ];

  const whyChooseUs = [
    {
      title: 'Holistic Approach',
      description:
        'Our Multifaceted Services Cover Every Facet of the Real Estate Journey, Offering a One-stop Destination for All Your Property-related Needs. Expertise: Backed by a Team of Industry Veterans, We Bring a Wealth of Knowledge and Experience to the Table, Ensuring That Your Ventures Are Informed and Secure. Client-centric',
    },
    {
      title: 'Focus',
      description:
        'Your Satisfaction is Our Driving Force. We Tailor Our Services to Meet Your Unique Needs, Fostering Enduring Relationships Built on Trust and Transparency.',
    },
    {
      title: 'Innovation',
      description:
        'We Stay Ahead of the Curve by Embracing Cutting-edge Technologies and Innovative Practices, Ensuring Efficiency and Effectiveness in All Our Endeavors.',
    },
    {
      title: 'Community Enrichment',
      description:
        'Beyond Transactions, We Are Committed to Uplifting the Communities We Operate in, Contributing Positively to the Social Fabric and Economic Growth.',
    },
  ];

  const testimonials = [
    {
      quote: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas arcu vitae mollis mauris tempor. Accumsan feugiat parturient porttitor ornare auctor nunc quam. Massa sagittis lorem duis neque eu. Sed volutpat',
      name: 'Rahul Deshmukh',
      position: 'Senior Architect',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas arcu vitae mollis mauris tempor. Accumsan feugiat parturient porttitor ornare auctor nunc quam. Massa sagittis lorem duis neque eu. Sed volutpat',
      name: 'Rahul Deshmukh',
      position: 'Senior Architect',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas arcu vitae mollis mauris tempor. Accumsan feugiat parturient porttitor ornare auctor nunc quam. Massa sagittis lorem duis neque eu. Sed volutpat',
      name: 'Rahul Deshmukh',
      position: 'Senior Architect',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas arcu vitae mollis mauris tempor. Accumsan feugiat parturient porttitor ornare auctor nunc quam. Massa sagittis lorem duis neque eu. Sed volutpat',
      name: 'Rahul Deshmukh',
      position: 'Senior Architect',
    },
    {
      quote: 'Lorem ipsum dolor sit amet consectetur',
      content:
        'Lorem ipsum dolor sit amet consectetur. Egestas arcu vitae mollis mauris tempor. Accumsan feugiat parturient porttitor ornare auctor nunc quam. Massa sagittis lorem duis neque eu. Sed volutpat',
      name: 'Rahul Deshmukh',
      position: 'Senior Architect',
    },
  ];

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
      scrollContainer.classList.add('cursor-grabbing');
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      scrollContainer.classList.remove('cursor-grabbing');
    };

    scrollContainer.addEventListener('mousedown', onMouseDown);
    scrollContainer.addEventListener('mousemove', onMouseMove);
    scrollContainer.addEventListener('mouseup', onMouseUp);
    scrollContainer.addEventListener('mouseleave', onMouseUp);

    return () => {
      scrollContainer.removeEventListener('mousedown', onMouseDown);
      scrollContainer.removeEventListener('mousemove', onMouseMove);
      scrollContainer.removeEventListener('mouseup', onMouseUp);
      scrollContainer.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);

  // Separate refs
  const projectScrollRef = useRef(null);
  const clientScrollRef = useRef(null);

  // Project section scroll handlers
  const handleProjectScrollLeft = () => {
    projectScrollRef.current.scrollLeft -= 440;
  };
  const handleProjectScrollRight = () => {
    projectScrollRef.current.scrollLeft += 440;
  };

  // Client section scroll handlers
  const handleClientScrollLeft = () => {
    clientScrollRef.current.scrollLeft -= 200;
  };
  const handleClientScrollRight = () => {
    clientScrollRef.current.scrollLeft += 200;
  };

  const testimonialsRef = useRef(null);

  const handleTestimonialScrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft -= 400;
    }
  };

  const handleTestimonialScrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft += 400;
    }
  };

  const scrollTestimonials = (direction) => {
    if (!testimonialsRef.current) return;
    const scrollAmount = 400; // adjust based on your card width
    testimonialsRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-3">
      {/* Hero Section */}
      <div className="relative w-full z-20">
        <div
          className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-screen bg-cover bg-center bg-no-repeat bg-black"
          style={{ backgroundImage: "url('/images/img_shutterstock2410084541_1.png')" }}
        >
          <div className="absolute inset-0 bg-global-2">
            <div className="w-full h-full flex flex-col">
              <Header />

              {/* HERO SECTION */}
              <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-20 md:py-32 lg:py-48">
                <div className="w-full max-w-[1418px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-start items-center">
                  {/* Hero Title */}
                  <h1 className="text-[18px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-montserrat font-medium leading-[26px] sm:leading-[38px] md:leading-[44px] lg:leading-[54px] text-center uppercase text-global-6 w-full sm:w-[90%] md:w-[75%] lg:w-[60%]">
                    Lorem ipsum dolor sit amet consectetur. Morbi.
                  </h1>

                  {/* Service Categories - Responsive and Wrapped */}
                  <div className="w-full px-1 sm:px-2">
                    <div className="flex flex-wrap gap-x-[8px] sm:gap-x-[12px] gap-y-[12px] justify-center items-center">
                      {[
                        'Labour camps',
                        'Property Brokerage',
                        'Property Marketing',
                        'Property Services',
                        'Property Investment',
                      ].map((label, index) => (
                        <div
                          key={index}
                          className="group flex justify-center items-center px-[12px] sm:px-[16px] py-[12px] sm:py-[16px] hover:bg-white rounded-[6px] transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap"
                        >
                          <span className="text-[12px] sm:text-[16px] font-montserrat font-semibold leading-[16px] sm:leading-[20px] text-center uppercase text-global-6 group-hover:text-[#b8943e] transition-all duration-300 ease-in-out">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="gradient"
                    size="medium"
                    className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 pt-[12px] pb-[12px] px-[24px] sm:pt-[16px] sm:pb-[16px] sm:px-[34px] 
                bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
                hover:bg-[linear-gradient(-151deg,#976621_0%,_#b8943e_100%)] 
                rounded-[4px] transition-all duration-500 ease-in-out"
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="relative w-full overflow-x-clip mt-[60px] sm:mt-[180px] lg:mt-[200px] px-4 sm:px-6 lg:px-[80px]">
        {/* Background Infographic */}
        <div
          className="hidden sm:block absolute -top-[360px] -right-24 w-[60%] h-[300px] sm:h-[500px] lg:h-[838px] bg-auto bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/img_group_26.png')" }}
        ></div>
        {/* Foreground Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 relative z-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            <div className="flex flex-col gap-[6px] sm:gap-[8px] lg:gap-[10px]">
              <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-montserrat font-bold leading-[14px] sm:leading-[16px] lg:leading-[18px] tracking-[0.5px] sm:tracking-[0.8px] lg:tracking-[1px] text-left uppercase text-global-6">
                About us
              </span>
              <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-[28px] sm:leading-[34px] lg:leading-[40px] text-left uppercase text-global-5">
                A Trailblazer in the realm of real estate
              </h2>
            </div>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left capitalize text-global-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere, quam vitae
              pretium tincidunt, nulla lorem varius velit, nec iaculis metus tortor a tellus. Nunc
              id sapien et justo efficitur tincidunt. Cras convallis, nulla sed lacinia eleifend,
              ligula turpis dapibus est, nec imperdiet ex nulla sed odio. Nulla id feugiat urna.
              Proin vestibulum, arcu vitae varius porttitor, odio erat fermentum nisi.
              <br />
              <br />
              Donec vehicula turpis eget velit malesuada, non consequat elit rutrum. Pellentesque
              non mi porta, posuere ante a, mattis erat. Morbi varius erat ac justo vehicula, a
              eleifend tellus facilisis. Aenean pretium magna non lectus tincidunt iaculis.
              Curabitur condimentum justo eget diam faucibus, in fermentum turpis feugiat. Nulla
              facilisi. Morbi in lorem nec odio viverra pretium. Mauris tristique, sapien nec
              commodo viverra, felis purus lobortis neque, a imperdiet ex nulla sed sapien.
            </p>

            <Button
              variant="gradient"
              size="medium"
              className="w-fit text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 pt-[12px] pb-[12px] px-[24px] sm:pt-[16px] sm:pb-[16px] sm:px-[34px] 
        bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
        hover:bg-[linear-gradient(-151deg,#976621_0%,_#b8943e_100%)] 
        rounded-[4px] transition-all duration-500 ease-in-out"
            >
              Learn more
            </Button>
          </div>

          {/* Right Image Block */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-[80%] sm:w-[90%] h-[200px] sm:h-[300px] lg:h-[474px] mx-auto lg:mx-0">
              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-[80%] sm:w-[80%] h-[200px] sm:h-[250px] lg:h-[428px] bg-global-4 flex justify-end items-center shadow-md">
                <img
                  src="/images/img_157a798b91_1.png"
                  className="w-full h-full object-cover"
                  alt="building"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="absolute -bottom-8 left-0 w-[35%] sm:w-[40%] h-[180px] sm:h-[280px] lg:h-[390px] bg-global-5 flex justify-center items-center shadow-md">
                <img
                  src="/images/img_0fabd09291_1.png"
                  className="w-full h-full object-cover"
                  alt="interior"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="w-full flex flex-col justify-start items-center bg-global-10 mt-[80px] sm:mt-[120px] lg:mt-[154px] px-4 sm:px-6 lg:px-[80px]">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-[25px] sm:leading-[31px] lg:leading-[37px] text-center uppercase text-global-1 mt-[32px] sm:mt-[40px] lg:mt-[48px] mb-[24px]">
          Our Services
        </h2>

        <div className="w-full px-4 sm:px-6 lg:px-[56px] py-[20px] sm:py-[50px] lg:py-[28px] mt-[10px] sm:mt-[50px] lg:mt-[56px]">
          <div className="w-full max-w-[1418px] mx-auto">
            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] sm:gap-[60px] lg:gap-[80px] w-full">
              {services?.slice(0, 9)?.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] justify-start items-center w-full"
                >
                  <img
                    src={service?.icon}
                    className="w-[60px] sm:w-[80px] lg:w-[96px] h-[60px] sm:h-[80px] lg:h-[96px]"
                    alt={`service-${index}`}
                  />
                  <h3 className="text-[12px] sm:text-[16px] lg:text-[20px] font-montserrat font-bold leading-[18px] sm:leading-[26px] lg:leading-[30px] text-center capitalize text-global-1 w-full">
                    {service?.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA Button Wrapper */}
            <div className="flex justify-center pb-[48px] pt-[40px] sm:pt-[50px]">
              <Button
                variant="gradient"
                size="medium"
                className="w-fit text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 pt-[12px] pb-[12px] px-[24px] sm:pt-[16px] sm:pb-[16px] sm:px-[34px] 
      bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
      hover:bg-[linear-gradient(-151deg,#976621_0%,_#b8943e_100%)] 
      rounded-[4px] transition-all duration-500 ease-in-out"
              >
                Enquire now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[40px] sm:mt-[50px] lg:mt-[56px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-tight text-left uppercase text-white">
          Our Projects
        </h2>

        {/* Underline */}
        <div className="h-[1px] bg-white mt-6 w-full" />

        <div className="relative w-full">
          {/* Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-hidden-x">
            <div
              ref={projectScrollRef}
              className="flex mt-12 gap-6 overflow-x-auto scroll-smooth py-6 scrollbar-hidden snap-x snap-mandatory"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-[300px] sm:min-w-[460px] sm:max-w-[460px] flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden snap-start"
                >
                  {/* Image section */}
                  <div className="relative w-full h-[280px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Pill Button */}
                    <span className="absolute top-4 right-4 bg-white text-yellow-500 text-xs font-bold uppercase px-4 py-1 rounded-full shadow">
                      {project.category}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-gray-500 uppercase">{project.location}</p>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <span>{project.rooms}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{project.area}</span>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200" />

                    <div className="flex justify-start items-center gap-2 group cursor-pointer">
                      <span className="text-sm font-semibold uppercase text-yellow-500 border-b border-yellow-500">
                        Learn more
                      </span>
                      <img
                        src="/images/img_group_10.svg"
                        className="w-[14px] h-[14px] transition-transform duration-300 group-hover:rotate-45"
                        alt="arrow"
                      />
                    </div>
                    {/* Left Arrow */}
                    <div
                      onClick={handleProjectScrollLeft}
                      className="absolute left-[0.2%] top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>

                    {/* Right Arrow */}
                    <div
                      onClick={handleProjectScrollRight}
                      className="absolute right-[0.2%] top-1/2 transform -translate-y-1/2 cursor-pointer z-20"
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="w-full flex flex-col gap-[60px] sm:gap-[70px] lg:gap-[80px] justify-start items-start mt-[80px] sm:mt-[100px] lg:mt-[108px]">
        <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px] justify-start items-start w-full px-4 sm:px-6 lg:px-0">
          <div className="flex justify-center items-start w-full px-4 sm:px-6 lg:px-[62px]">
            <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-[25px] sm:leading-[31px] lg:leading-[37px] text-left uppercase text-global-6 w-auto">
              Our Clients
            </h2>
            <div className="flex justify-end items-center flex-1 mt-[2px] sm:mt-[3px] lg:mt-[4px]">
              <img
                src="/images/img_group_12.svg"
                onClick={handleClientScrollLeft}
                className="w-[32px] sm:w-[40px] lg:w-[48px] h-[32px] sm:h-[40px] lg:h-[48px] cursor-pointer"
                alt="prev"
              />
              <img
                src="/images/img_group_11.svg"
                onClick={handleClientScrollRight}
                className="w-[32px] sm:w-[40px] lg:w-[48px] h-[32px] sm:h-[40px] lg:h-[48px] ml-[12px] sm:ml-[15px] lg:ml-[18px] cursor-pointer"
                alt="next"
              />
            </div>
          </div>

          {/* Scrollable Clients */}
          <div
            ref={clientScrollRef}
            className="w-full overflow-x-auto sm:overflow-x-hidden scrollbar-hide scroll-smooth"
          >
            <div className="flex justify-start items-center w-max">
              {clients?.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  className={`w-[120px] sm:w-[160px] lg:w-[200px] h-[120px] sm:h-[160px] lg:h-[200px] ${
                    index > 0 ? 'ml-[16px] sm:ml-[20px] lg:ml-[24px]' : ''
                  }`}
                  alt={`client-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full flex flex-col justify-center items-center bg-global-10">
          <div className="w-full max-w-[1418px] mx-auto flex flex-col gap-[48px] sm:gap-[60px] lg:gap-[72px] justify-start items-center px-4 sm:px-6 lg:px-[126px] pt-[60px] sm:pt-[80px] lg:pt-[100px]">
            {/* Section Heading */}
            <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-[28px] sm:leading-[31px] lg:leading-[37px] text-center uppercase text-global-1">
              Why Choose LOREUM EPSOM?
            </h2>

            {/* Cards Container */}
            <div className="flex flex-col lg:flex-row w-full">
              {whyChooseUs?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-[16px] justify-start items-center 
          w-full lg:w-[320px] px-[16px] sm:px-[20px] lg:px-[24px] py-[20px] sm:py-[24px]
          ${index < whyChooseUs?.length - 1 ? 'lg:border-r border-[#b3b3b3]' : ''} 
          ${index < whyChooseUs?.length - 1 && 'border-b lg:border-b-0'}`}
                >
                  {/* Card Content */}
                  <div className="flex flex-col gap-[10px] justify-start items-center w-full">
                    <h3 className="min-h-[unset] sm:min-h-[70px] lg:min-h-[80px] text-[16px] sm:text-[18px] lg:text-[20px] font-montserrat font-semibold leading-[22px] sm:leading-[24px] lg:leading-[25px] text-center uppercase text-global-1">
                      {item?.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-center capitalize text-global-1 w-full overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                      {item?.description}
                    </p>
                  </div>

                  {/* Read More */}
                  <div className="flex justify-center items-center gap-[6px] group cursor-pointer w-auto">
                    <span className="text-[14px] font-montserrat font-semibold uppercase text-global-5 border-b border-global-5">
                      Learn more
                    </span>
                    <img
                      src="/images/img_group_10.svg"
                      className="w-[14px] h-[14px] transition-transform duration-300 group-hover:rotate-45"
                      alt="arrow"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Paragraph */}
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-center capitalize text-global-1 w-full tracking-wide mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aenean pharetra
              dignissim nisl, at efficitur justo. Curabitur ornare, massa vitae placerat tempus,
              velit justo dapibus nibh, vitae volutpat ex nunc sed risus. Tuae Visionem, Nostra
              Peritia - Una Nobiscum, Futurum Luminis Aedificamus in Proprietate.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-16 sm:pt-[20px]">
              <Button
                variant="gradient"
                size="medium"
                className="w-fit text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 py-[12px] px-[24px] sm:py-[16px] sm:px-[34px] 
        bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
        hover:bg-[linear-gradient(-151deg,#976621_0%,_#b8943e_100%)] 
        rounded-[4px] transition-all duration-500 ease-in-out"
              >
                Enquire now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative w-full mt-[40px] sm:mt-[50px] lg:mt-[56px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-start w-full">
          {/* Heading */}
          <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-tight text-left uppercase text-white">
            What Our Clients Say ?
          </h2>
          <div className="flex justify-end items-center flex-1 mt-[2px] sm:mt-[3px] lg:mt-[4px]">
            <img
              src="/images/img_group_12.svg"
              onClick={() => scrollTestimonials('left')}
              className="w-[32px] sm:w-[40px] lg:w-[48px] h-[32px] sm:h-[40px] lg:h-[48px] cursor-pointer"
              alt="prev"
            />
            <img
              src="/images/img_group_11.svg"
              onClick={() => scrollTestimonials('right')}
              className="w-[32px] sm:w-[40px] lg:w-[48px] h-[32px] sm:h-[40px] lg:h-[48px] ml-[12px] sm:ml-[15px] lg:ml-[18px] cursor-pointer"
              alt="next"
            />
          </div>
        </div>
        <div className="h-[1px] bg-white mt-6 w-full align-center" />
      </div>

      {/* Testimonials Carousel */}
      <div className="w-full overflow-x-hidden mt-[50px] sm:mt-[58px] lg:mt-[64px] relative">
        <div
          ref={testimonialsRef}
          className="flex gap-[16px] sm:gap-[20px] lg:gap-[24px] overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-[32px] snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            overflowY: 'hidden',
          }}
        >
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] justify-start items-center w-[300px] sm:w-[380px] lg:w-[400px] bg-global-11 px-[20px] sm:px-[24px] lg:px-[28px] py-[20px] sm:py-[24px] lg:py-[28px] shrink-0 snap-start"
            >
              <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px] justify-start items-center w-full">
                <h3 className="text-[18px] sm:text-[21px] lg:text-[24px] font-montserrat font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-left text-global-1 w-full">
                  "{testimonial?.quote}"
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-normal leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left capitalize text-global-1 w-full">
                  {testimonial?.content}
                </p>
              </div>
              <div className="w-full h-[1px] bg-global-8"></div>
              <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-start items-start w-full">
                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-montserrat font-semibold leading-[14px] sm:leading-[16px] lg:leading-[18px] text-left uppercase text-global-5 w-auto">
                  {testimonial?.name}
                </span>
                <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-lato font-normal leading-[14px] sm:leading-[15px] lg:leading-[17px] text-left text-global-1 w-auto">
                  {testimonial?.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col gap-[40px] sm:gap-[48px] lg:gap-[56px] justify-start items-start mt-[80px] sm:mt-[100px] lg:mt-[108px] px-4 sm:px-6 lg:px-[60px]">
        <h2 className="text-[20px] sm:text-[25px] lg:text-[30px] font-montserrat font-medium leading-[25px] sm:leading-[31px] lg:leading-[37px] text-left uppercase text-global-6 w-auto">
          Reach out to us
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[40px] lg:gap-[80px]">
          {/* Left Side – Form */}
          <div className="flex flex-col gap-[32px] sm:gap-[38px] lg:gap-[46px] justify-start items-start w-full lg:w-1/2">
            <div className="flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px] justify-start items-start w-full">
              <EditText
                placeholder="Full name"
                value={formData?.fullName}
                onChange={(e) => handleFormChange('fullName', e?.target?.value)}
                fullWidth
              />
              <EditText
                placeholder="Phone number"
                value={formData?.phoneNumber}
                onChange={(e) => handleFormChange('phoneNumber', e?.target?.value)}
                fullWidth
              />
              <EditText
                placeholder="Email"
                type="email"
                value={formData?.email}
                onChange={(e) => handleFormChange('email', e?.target?.value)}
                fullWidth
              />
              <div className="flex justify-between items-center w-full border border-form-1 rounded-[6px] px-[18px] sm:px-[20px] lg:px-[24px] py-[12px] sm:py-[14px] lg:py-[16px] bg-form-1">
                <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-bold leading-[16px] sm:leading-[18px] lg:leading-[20px] text-left text-form-1">
                  What are you interested in?
                </span>
                <img
                  src="/images/img_down_line.svg"
                  className="w-[12px] sm:w-[14px] lg:w-[16px] h-[12px] sm:h-[14px] lg:h-[16px]"
                  alt="dropdown"
                />
              </div>
              <TextArea
                placeholder="Message"
                value={formData?.message}
                onChange={(e) => handleFormChange('message', e?.target?.value)}
                rows={6}
                fullWidth
              />
              <div className="flex justify-start items-center w-full">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-[16px] sm:w-[18px] lg:w-[20px] h-[16px] sm:h-[18px] lg:h-[20px] accent-[#d2ae4d] cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-[14px] sm:text-[15px] lg:text-[16px] font-lato font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-left text-form-2 ml-[6px] sm:ml-[7px] lg:ml-[8px] cursor-pointer"
                >
                  I have read and I understand{' '}
                  <span className="text-[#d2ae4d]">data privacy notice</span>
                </label>
              </div>
            </div>
            {/* CTA Button Wrapper */}
            <div className="flex justify-center pt-[40px] sm:pt-[50px]">
              <Button
                variant="gradient"
                size="medium"
                className="w-fit text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 -mt-[40px] pt-[12px] pb-[12px] px-[24px] sm:pt-[16px] sm:pb-[16px] sm:px-[34px] 
      bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
      hover:bg-[linear-gradient(-151deg,#976621_0%,_#b8943e_100%)] 
      rounded-[4px] transition-all duration-500 ease-in-out"
              >
                Enquire now
              </Button>
            </div>
          </div>

          {/* Right Side – Map/Image */}
          <div className="flex justify-start items-center w-full lg:w-1/2 bg-global-9">
            <img
              src="/images/img_image_11.png"
              className="w-full h-[300px] sm:h-[400px] lg:h-[488px] object-cover"
              alt="contact"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16 lg:mt-20">
        {/* 4 Equal Columns in Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-6">
              Contact info
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <img
                  src="/images/img_group_5_lime_600.svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="phone"
                />
                <span className="ml-2 text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-3">
                  042 - 616281
                </span>
              </div>
              <div className="flex items-center">
                <img src="/images/img_group_6.svg" className="w-5 h-5" alt="email" />
                <span className="ml-2 text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-3">
                  admin@cloudstar.net
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src="/images/img_group_22.svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  alt="location"
                />
                <span className="ml-2 text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-3">
                  Al Quoz - Al Quoz 3 - Dubai
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-6">
              Quick Links
            </span>
            <div className="flex flex-col gap-4 text-xs sm:text-sm lg:text-base font-montserrat font-medium uppercase text-global-3">
              <span>About us</span>
              <span>Leadership</span>
              <span>Contact Us</span>
              <span>Our Projects</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-6">
              Services
            </span>
            <div className="flex flex-col gap-4 text-xs sm:text-sm lg:text-base font-montserrat font-medium uppercase text-global-3">
              <span>Labor Camps</span>
              <span>Property Brokerage</span>
              <span>Property Marketing</span>
              <span>Property Services</span>
              <span>Property Appraisal</span>
              <span>Property Investment</span>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm lg:text-base font-montserrat font-semibold uppercase text-global-6">
              Resources
            </span>
            <div className="flex flex-col gap-4 text-xs sm:text-sm lg:text-base font-montserrat font-medium uppercase text-global-3">
              <span>News</span>
              <span>FAQ</span>
              <span>Infographics</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between items-center px-4 py-4 sm:px-[12px] lg:px-[14px] mt-[20px]">
        {/* Logo */}
        <img
          src="/images/img_png_logo_2_var_white.png"
          className="w-[150px] sm:w-[180px] lg:w-[224px] h-[45px] sm:h-[55px] lg:h-[68px]"
          alt="logo"
        />

        {/* Copyright */}
        <span className="flex justify-center items-center text-[12px] sm:text-[14px] lg:text-[16px] font-lexend font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-center lg:text-left uppercase text-global-2 w-full lg:w-auto mt-4 lg:mt-0 lg:ml-[76px]">
          Copyright © 2024 LOrEUM Group. Designed & Developed by Wisoft Solutions
        </span>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start items-center w-full lg:w-auto mt-4 lg:mt-0">
          <img src="/images/img_fb.svg" className="w-[20px] h-[20px]" alt="facebook" />
          <img src="/images/img_in.svg" className="w-[20px] h-[20px] ml-[12px]" alt="linkedin" />
          <img src="/images/img_inst.svg" className="w-[20px] h-[20px] ml-[12px]" alt="instagram" />
          <img src="/images/img_tivl.svg" className="w-[20px] h-[20px] ml-[12px]" alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Home;
