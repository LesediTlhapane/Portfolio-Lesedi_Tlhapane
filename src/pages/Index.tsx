import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Code2, GraduationCap, Briefcase, Mail, Github, Linkedin, Target, User } from "lucide-react";

const Index = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const skills = [
    "Flutter", "React", "Dart", "Java", "Python", 
    "C#", "ASP.NET Core", "CSS", "HTML", "SQL", 
    "MongoDB", "JavaScript"
  ];

  const education = [
    {
      year: "2020",
      institution: "Varsity College",
      qualification: "Higher Certificate in Information Technology",
      level: "NQF Level 5"
    },
    {
      year: "2021 - 2025",
      institution: "Central University of Technology",
      qualification: "Diploma",
      level: "NQF Level 6"
    },
    {
      year: "2024 - 2025",
      institution: "WeThinkCode",
      qualification: "Software Development",
      level: "NQF Level 6"
    }
  ];

  const projects = [
    {
      name: "Robot Simulation Game",
      tech: "Java",
      description: "Interactive simulation game with robot mechanics and gameplay logic"
    },
    {
      name: "Leave Management System",
      tech: "HTML, CSS, JavaScript",
      description: "Web application for managing employee leave requests and approvals"
    },
    {
      name: "Yamiko Restaurant",
      tech: "HTML, CSS, JavaScript",
      description: "Restaurant website with menu display and online ordering features"
    },
    {
      name: "Tasty Tales - Traditional Food History",
      tech: "HTML, CSS, JavaScript",
      description: "Web application showcasing traditional food histories and recipes"
    },
    {
      name: "Tasty Tales Mobile App",
      tech: "Flutter, Dart",
      description: "Cross-platform mobile application for traditional food exploration"
    },
    {
      name: "API Development",
      tech: "Various",
      description: "Built RESTful APIs to connect mobile applications with web platforms"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:leseditllhapane5@gmail.com";
    setShowContactDialog(false);
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/", "_blank");
    setShowContactDialog(false);
  };

  const handleViewProjects = () => {
    window.open("https://github.com/Lesedi-coder07", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 text-sm">
                Full-Stack Developer
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Lesedi Tlhapane
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into elegant, functional solutions across web and mobile platforms
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                className="bg-gradient-primary hover:shadow-green transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
                onClick={handleViewProjects}
              >
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <User className="text-primary h-8 w-8" />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <p className="text-muted-foreground">Who I am</p>
          </div>
          <Card className="bg-card border-primary/30 shadow-green">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                My name is <span className="text-primary font-semibold">Lesedi Tlhapane</span>, a passionate and driven 
                junior software developer eager to make my mark in the technology industry. I am committed to building 
                innovative solutions and continuously growing as a professional in the software development field.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am currently completing my <span className="text-primary font-semibold">Diploma in Information Technology</span> at 
                the Central University of Technology, set to graduate by the end of this year. Additionally, I have obtained 
                an <span className="text-primary font-semibold">NQF Level 6 qualification in Software Development</span> from 
                WeThinkCode, where I gained extensive hands-on experience in programming, problem-solving, and collaborative 
                project work.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Through my studies, I've developed strong technical skills in languages such as <span className="text-primary font-semibold">Java, 
                Python, and C#</span>, with practical experience in frameworks like <span className="text-primary font-semibold">ASP.NET Core, 
                Flutter, and Firebase</span>. I am particularly drawn to opportunities that allow me to apply my skills to real-world 
                projects, learn from experienced engineers, and contribute meaningfully to a team environment.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                What sets me apart is my <span className="text-primary font-semibold">dedication to continuous learning</span>, 
                my ability to adapt quickly to new technologies, and my commitment to delivering high-quality work. I take pride 
                in being a problem-solver and team player who thrives under challenges and always strives to improve both 
                personally and professionally.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am actively seeking opportunities as a <span className="text-primary font-semibold">Junior Software Engineer</span> where 
                I can contribute my skills, grow alongside a talented team, and build solutions that make a real impact. I am 
                available for interviews and excited to discuss how I can add value to your organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="text-primary h-8 w-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            </div>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center animate-slide-in">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                className="bg-card border-primary/30 text-foreground px-6 py-2 text-base hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="text-primary h-8 w-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <p className="text-muted-foreground">My academic journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="text-primary font-semibold">{edu.year}</div>
                  <h3 className="text-xl font-bold">{edu.institution}</h3>
                  <p className="text-foreground/90">{edu.qualification}</p>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {edu.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="text-primary h-8 w-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            </div>
            <p className="text-muted-foreground">What I've built</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-green group"
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {project.tech}
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aspirations Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Target className="text-primary h-8 w-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Career Goals</h2>
          </div>
          <Card className="bg-card border-primary/30 shadow-green">
            <CardContent className="p-8">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Aspiring to become a{" "}
                <span className="text-primary font-semibold">Full-Stack Developer</span>,
                mastering both frontend and backend technologies to create
                comprehensive, scalable solutions that make a real impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 Lesedi Tlhapane. Built with passion and code.
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                onClick={() => window.location.href = "mailto:leseditllhapane5@gmail.com"}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                onClick={() => window.open("https://github.com/Lesedi-coder07", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary"
                onClick={() => window.open("https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <AlertDialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Get In Touch</AlertDialogTitle>
            <AlertDialogDescription>
              Choose your preferred method to connect with me:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <Button 
              className="w-full bg-gradient-primary hover:shadow-green"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email: leseditllhapane5@gmail.com
            </Button>
            <Button 
              variant="outline"
              className="w-full border-primary/30 hover:bg-primary/10"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Profile
            </Button>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Index;
