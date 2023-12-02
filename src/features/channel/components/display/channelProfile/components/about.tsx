import React, { FC } from "react";

const About: FC = () => {
    return (
        <div className="container h-[39rem] px-12 mt-20  ">
            <span>
                We know that many limitations remain as discussed above and we plan to
                make regular model updates to improve in such areas. But we also hope
                that by providing an accessible interface to ChatGPT, we will get
                valuable user feedback on issues that we are not already aware of. Users
                are encouraged to provide feedback on problematic model outputs through
                the UI, as well as on false positives/negatives from the external
                content filter which is also part of the interface. We are particularly
                interested in <br /> feedback regarding harmful outputs that could occur in
                real-world, non-adversarial conditions, as well as feedback that helps
                us uncover and understand novel risks and possible mitigations.You can
                choose to enter the ChatGPT Feedback Contest3 for a chance to win up to
                $500 in API credits
            </span>
        </div>
    );
}

export default About;