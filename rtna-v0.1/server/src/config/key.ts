import dev_config from './dev'
import { config_interface } from './inteface';

let config : config_interface ;
config = dev_config
if (process.env.NODE_ENV === 'production') {
    //export { default } from './prod';
  } else if (process.env.NODE_ENV === 'ci') {
    //export { default } from './ci';
  } else {
    config = dev_config
  }

  export default config
  