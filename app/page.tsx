import JarvisEmblem from './herosection';
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import { NoirContactSection } from './contact';
import CertificateSection from './certificates';
export default function JarvisPage() {
  return (<>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 min-h-screen bg-transparent overflow-hidden relative px-4 py-8 lg:py-0 max-w-full">
      
      <div className="z-10 ">
        <JarvisEmblem 
          size={300} 
          color="#000000" 
        />
      </div>

      <div className="z-10 w-full lg:w-auto">
        <About />
      </div>
          
    </div>
    
     <div id='intro' className='bg-black rounded-xl p-2 sm:p-0 md:p-10 m-2 sm:m-0 md:m-10 max-w-full'>
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