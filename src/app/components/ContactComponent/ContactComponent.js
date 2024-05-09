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
          <LinkedInIcon sx={{ color: '#0076B2' }} />
       </Link>
    </Contact>
  );
}

ContactComponent.propTypes = {
  nameDev: PropTypes.string.isRequired,
  spec: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
