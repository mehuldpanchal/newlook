"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Shield,
  Award,
  Users,
  ThumbsUp,
  Star,
} from "lucide-react";
import { placeholders } from "@/lib/placeholders";

const sellingPoints = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Star, text: "Free Estimates" },
  { icon: Award, text: "Premium Materials" },
  { icon: Users, text: "Expert Craftsmanship" },
  { icon: ThumbsUp, text: "Residential & Commercial" },
  { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
  { icon: Star, text: "Senior Discount Available" },
  { icon: Award, text: "Design & Site Preparation" },
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={placeholders.aboutBg}
          alt="Completed masonry project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={placeholders.aboutTeam}
                alt="Beautiful brick house with two garage doors - completed project"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold text-gold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </motion.div>

            {/* Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 lg:-left-8 bg-accent text-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-2xl font-bold">500+</div>
              <div className="text-xs">Projects Completed</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-6">
              Why Choose <span className="text-primary">New Look?</span>
            </h2>

            <p className="text-lg text-dark-500 leading-relaxed mb-6">
              For over 20 years, New Look Paving & Masonry has been the trusted
              choice for homeowners and businesses throughout Fredericksburg, VA
              and the surrounding areas. Our commitment to quality craftsmanship
              and customer satisfaction has made us the premier choice for all
              exterior improvement needs.
            </p>

            <p className="text-lg text-dark-500 leading-relaxed mb-8">
              We take pride in every project, treating each home as if it were
              our own. From initial consultation to final walkthrough, our team
              of skilled professionals ensures exceptional results that stand
              the test of time.
            </p>

            {/* Selling Points Grid */}
            <div className="grid grid-cols-2 gap-4">
              {sellingPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <point.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-dark font-medium text-sm md:text-base">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:703-725-3110"
                className="bg-primary hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg text-center transition-all hover:shadow-lg min-h-[48px] flex items-center justify-center"
              >
                Call Us: 703-725-3110
              </a>
              <a
                href="/about"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg text-center transition-all min-h-[48px] flex items-center justify-center"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

