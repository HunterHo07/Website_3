import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                "课堂奉承奉上。 在此之前，患者的心理健康就是医院的门户。 
也没有任何人因为痛苦是痛苦而遭受痛苦，而是因为这样的时代永远不会发生，他通过劳动和痛苦来寻求某种巨大的快乐。 除非有什么好结果？
但是，谁能正确地批评一个人想要沉浸在不会带来不适的快乐中，或者谁会避免痛苦而不会产生快乐呢？"
                </p>
                <button className='btn btn-primary rounded-0'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
