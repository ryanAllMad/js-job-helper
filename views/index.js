import { hydrateRoot } from 'react-dom/client';
import BodyContent from './components/BodyContent.js';

hydrateRoot(document.getElementById('root'), <BodyContent />);