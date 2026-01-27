import JarvisEmblem from './herosection';
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import { NoirContactSection } from './contact';
import CertificateSection from './certificates';
export default function JarvisPage() {
  return (<>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 min-h-screen bg-transparent overflow-hidden relative px-4 py-8 lg:py-0">
      
      <div className="z-10 bg-white">
        <JarvisEmblem 
          size={300} 
          color="#000000" // Set the emblem color to Black
        />
      </div>

      <div className="z-10 w-full lg:w-auto">
        <About />
      </div>
          
    </div>
    
     <div id='intro' className='bg-black rounded-xl p-4 sm:p-6 md:p-10 m-4 sm:m-6 md:m-10'>
       <Skills />
     </div>
     <div id='experience'>
    <Experience></Experience></div>
    <div id='projects'>
    <Projects></Projects></div>
    <div id='certificates'>
    <CertificateSection/></div>
    <div id='contact'>
    <NoirContactSection /></div>
    </>
  );
}