import React ,{useState}from "react";
import "./style.css";
import img from '../assets/img.png'
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Typist from 'react-typist';




const Header = () => {
  const content = `
  // My self introduction
  Name
  {"First name: ANAS;";
  "Last name: BRAIEK;";
  "}"
  |`;
    const text = ["I'm ANAS", "I'm a developer"];
    const [firstDone, setFirstDone] = useState(false);
  
    return (
        <div className="section">
            <div className="overlap">
            <div className="box">
      <img className="group" alt="Group" src="https://c.animaapp.com/mr8gn2lQ/img/group.png" />
    </div>
                <div className="div-sppb-row">
                    <div className="div">
                        <div className="div-column-wrap-id">
                        <img className="removebg" alt="Removebg" src={img} />
                            <div className="div-sppb-column">
                                <div className="div-sppb-addon" />
                            </div>
                        </div>
                        <div className="div-sppb-column-wrapper">
                            <div className="div-sppb-column-2">
                                <div className="heading">
                                    <div className="text-wrapper">Hello</div>
                                </div>
                                <div className="div-wrapper">
                                <div className="text-wrapper-2">
      <Typewriter
        words={text}
        loop={true}
        cursor
        cursorStyle="/"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={() => console.log(`Done after ${text.length} loops!`)}
      />
    </div>
                                </div>
                                <div className="div-sppb-addon-wrapper">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="code">
            <div className="overlap-group-2">
              <div className="my-self-introduction">
                <span className="span">
                  // My self introduction
                  <br />
                </span>
                <Typist cursor={{ show: false }} onTypingDone={() => setFirstDone(true)}>
                  <span className="text-wrapper-3"> Name </span>
                  <Typist.Delay ms={500} />
                  <div className="text-wrapper-4">{" {"}</div>
                  <Typist.Delay ms={1500} />
                  <div className="text-wrapper-5"> First name: ANAS;</div>
                  <div className="text-wrapper-7">Last name: BRAIEK;</div>
                  <div className="text-wrapper-9">{"}"}</div>
                  <Typist.Delay ms={500} />
                  <div className="text-wrapper-10">|</div>
                </Typist>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {firstDone && (
    <div className="div-sppb-addon-2">
  <div className="overlap-group-wrapper">
    <div className="overlap-group-3">
      <div className="code-2">
        <Typist cursor={{ show: false }}>
          <div className="text-wrapper-11">.What I Do</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-12">{"{"}</div>
          <Typist.Delay ms={500} />
          <div className="profession"> Profession:</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-13">Developer;</div>
          <Typist.Delay ms={500} />
          <div className="markup"> Markup:</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-14">HTML;</div>
          <Typist.Delay ms={500} />
          <div className="expert"> Expert:</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-15">PHP;</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-9">{"}"}</div>
          <Typist.Delay ms={500} />
          <div className="text-wrapper-10">|</div>
        </Typist>
      </div>
      
    </div>
    
  </div>
</div>
    )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
