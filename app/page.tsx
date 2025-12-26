import JarvisEmblem from './herosection';
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import { NoirContactSection } from './contact';
import CertificateSection from './certificates';
export default function JarvisPage() {
  return (<>

    <div className="flex flex-row justify-center items-center gap-20 min-h-screen bg-transparent overflow-hidden relative ">
      
      <div className="z-10 bg-white">
        <JarvisEmblem 
          size={300} 
          color="#000000" // Set the emblem color to Black
        />
      </div>

      <div className="z-10">
        <About />
      </div>
          
    </div>
    
     <div id='intro' className='bg-black rounded-xl p-10 m-10 '>
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