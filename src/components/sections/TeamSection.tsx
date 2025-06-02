import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  img: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Chief Security Officer',
    bio: 'Over 15 years of experience in cybersecurity with expertise in red teaming and secure architecture design.',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Samantha Chen',
    role: 'Lead Penetration Tester',
    bio: 'Certified ethical hacker specializing in web application security and API testing methodologies.',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'Mobile Security Specialist',
    bio: 'Expert in Android and iOS application security with a background in secure development practices.',
    img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Source Code Analyst',
    bio: 'Specialized in secure code reviews across multiple languages with a focus on SAST/DAST implementation.',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Security Experts
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our team of experienced security professionals is dedicated to helping you build secure, resilient applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-center space-x-3">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        className="bg-white text-blue-400 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a 
                        href={member.socialLinks.github} 
                        className="bg-white text-slate-800 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;