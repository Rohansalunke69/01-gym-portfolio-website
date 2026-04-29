"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Full Body HIIT Workout",
    thumbnail: "🏋️",
    duration: "12:45",
    views: "24K",
  },
  {
    title: "Perfect Push-Up Guide",
    thumbnail: "💪",
    duration: "8:30",
    views: "18K",
  },
  {
    title: "Meal Prep for Gains",
    thumbnail: "🍗",
    duration: "15:20",
    views: "31K",
  },
  {
    title: "5 Mobility Exercises",
    thumbnail: "🤸",
    duration: "10:15",
    views: "12K",
  },
  {
    title: "Deadlift Masterclass",
    thumbnail: "🔥",
    duration: "18:00",
    views: "42K",
  },
  {
    title: "Recovery & Sleep Tips",
    thumbnail: "😴",
    duration: "11:30",
    views: "9K",
  },
];

export default function VideosSection() {
  return (
    <section id="videos" className="section-padding bg-background">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Content
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-heading mb-4"
        >
          Watch & <span className="text-accent">Learn</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light/60 max-w-2xl mb-16 text-lg"
        >
          Free training content to get you started. Subscribe for weekly
          workouts, nutrition tips, and behind-the-scenes training footage.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail area */}
              <div className="relative aspect-video bg-gradient-to-br from-olive/30 to-surface flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {video.thumbnail}
                </span>
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-background ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Duration */}
                <span className="absolute bottom-3 right-3 bg-background/80 text-light text-xs px-2 py-1 rounded font-medium">
                  {video.duration}
                </span>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-base uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-light/40 text-sm">{video.views} views</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
