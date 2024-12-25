'use client';

import { GraduationCap, Briefcase } from 'lucide-react';
import { TimelineItem } from './timeline-item';

const education = [
  {
    title: 'B.Tech CSE (AIML) Bachelor Degree',
    subtitle: 'Suresh Gyan Vihar University , Jaipur, India',
    description:
      'Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.',
    date: '2000 - 2024',
    isExpanded: true,
  },
  {
    title: 'Higher Secondary School',
    date: '2017 - 2019',
  },
  {
    title: 'High School',
    date: '2014 - 2016',
  },
];

const experience = [
  {
    title: 'Destiny It Services Pvt Ltd',
    subtitle:
      '206, Ashiyana Tower, Exhibition road, Patna, Bihar 800001',
    description:
      'Delivered quality code by applying the best development practices',
    date: '2023 - 2024',
    tags: ['NEXT', 'REACT', 'JAVASCRIPT'],
    isExpanded: true,
  },
  {
    title: 'Cognus Technology',
    date: '2022 - 2023',
  },
  {
    title: 'Roooted India',
    date: '2021 - 2022',
  },
];

export function TimelineSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wider">
            LIFE TIME
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="relative">
              {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="relative">
              {experience.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}