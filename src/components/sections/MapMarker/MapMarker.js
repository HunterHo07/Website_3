import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967.604782611855!2d101.69338341641452!3d3.1467845372615746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49d3e30988d7%3A0x464a4b7fda23c09a!2sKuala%20Lumpur%20City%20Centre%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sdz!4v1684711543596!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
