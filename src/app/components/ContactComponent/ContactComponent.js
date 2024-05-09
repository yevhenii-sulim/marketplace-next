import PropTypes from 'prop-types';
import Link from 'next/link'; // Import Link from Next.js for routing
import { Contact } from './ContactComponent.styled'; // Import styled components
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactComponent({ nameDev, spec, link }) {
  return (
    <Contact>
      <h4>{nameDev}</h4>
      <p>{spec}</p>
      <Link href={link} passHref>
    {/* <a target="_blank" rel="noopener noreferrer"> Open link in a new tab */}
          {/* <LinkedInIcon sx={{ color: '#0076B2' }} /> */}
        {/* </a> */}
       </Link>
    </Contact>
  );
}

ContactComponent.propTypes = {
  nameDev: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
