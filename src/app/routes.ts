import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Colors } from './pages/Colors';
import { Typography } from './pages/Typography';
import { Spacing } from './pages/Spacing';
import { Components } from './pages/Components';
import { Motion } from './pages/Motion';
import { Accessibility } from './pages/Accessibility';
import { Checklist } from './pages/Checklist';
import { Examples } from './pages/Examples';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true,             Component: Overview       },
      { path: 'colors',          Component: Colors         },
      { path: 'typography',      Component: Typography     },
      { path: 'spacing',         Component: Spacing        },
      { path: 'components',      Component: Components     },
      { path: 'motion',          Component: Motion         },
      { path: 'accessibility',   Component: Accessibility  },
      { path: 'checklist',       Component: Checklist      },
      { path: 'examples',        Component: Examples       },
    ],
  },
]);
