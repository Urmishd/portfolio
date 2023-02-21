import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={[{ color: "white", }]} label="Main Skill" {...a11yProps(0)} />
          <Tab sx={{ color: "white" }} label="Awards" {...a11yProps(1)} />
          <Tab sx={{ color: "white" }} label="Experience" {...a11yProps(2)} />
          <Tab sx={{ color: "white" }} label="Education & Certification" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul>
          <li className='text-secondary'>
            <a>Web and user interface design<span className='text-secondary'> - Development</span></a><br />
            Websites, web experiences, ...
          </li><br />
          <li className='list-unstyled'><h4 className='text-secondary'>Technology</h4></li>
          <div className='pl-5 d-flex list-unstyled justify-content-between'>
            <li className='text-secondary'>HTML</li>
            <li className='text-secondary'>CSS</li>
            <li className='text-secondary'>JS</li>
            <li className='text-secondary'>REACT JS</li>
            <li className='text-secondary'>BOOTSTRAP</li>
            <li className='text-secondary'>MUI</li>
            <li className='text-secondary'>TAILWIND</li>
            </div>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <a className='text-decoration-none text-secondary' title='see certificate' href="https://trainings.internshala.com/s/v/2491943/e3e281ff" target="blank">React js</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='text-decoration-none text-secondary' title='see certificate' href="https://trainings.internshala.com/s/v/2638416/caee1659" target="blank">Ethical Hacking</a>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h2 className='text-secondary'>Fresher</h2>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <ul>
          <li className='text-secondary list-unstyled'>
            <a>BCA In Computer Application<span className='text-secondary'>- Gujarat University,Ahemdabad, Gujarat, India.</span></a><br />
            2022
          </li><br />
          <li className='text-secondary list-unstyled'>
            <a>12th In Commerce<span className='text-secondary'>- Desai Eduction Hadala, Gujarat</span></a><br />
            2019
          </li><br />
          <li className='text-secondary list-unstyled'>
            <a>10th In Ssc<span className='text-secondary'>- Patel N.K Vidhyalay Jangar, Gujarat, India.</span></a><br />
            2017
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}