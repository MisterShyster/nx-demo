import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'app3',

  library: { type: 'var', name: 'app3' },

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
