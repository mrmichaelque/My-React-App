import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Tab } from '.src/atom' 
import { Sidebar } from 'atomized';
import { 
    LandingPage, 
    ProfileHome, 
    ProjectHome, 
    SkillsScreen,
    CredentialsScreen,
    ExperienceScreen,
    AboutMeScreen,
    SearchScreen 
} from './index';

const SidebarNav = (props) => {
  const TabNames = (props) => {
    return (
      <div>
        {props.tabNames.map(name => (
          <Tab
            key={name}
            textColor="white"
            bg="blue"
            hoverTextColor="blue"
            hoverBg="white"
            active={props.activeTab === name}
            onClick={() => props.setActiveTab(name)}
          >
            {name}
          </Tab>
        ))}
      </div>
    );
  };

  return (
    <Router>
      <Sidebar>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/credentials">Credentials</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About Me</Link>
        <Link to="/search">Search</Link>
      </Sidebar>

      <Route exact path="/" component={LandingPage} />
      <Route path="/profile" component={ProfileHome} />
      <Route path="/projects" component={ProjectHome} />
      <Route path="/skills" component={SkillsScreen} />
      <Route path="/credentials" component={CredentialsScreen} />
      <Route path="/experience" component={ExperienceScreen} />
      <Route path="/about" component={AboutMeScreen} />
      <Route path="/search" component={SearchScreen} />
    </Router>
  );
};

export function SidebarNav
