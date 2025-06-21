---
layout: default
title: About Us
permalink: /about/
---

<div class="about-page">
  <div class="about-hero">
    <h1>About RoadTripp Adventures</h1>
    <div class="family-photo">
      <img src="{{ '/assets/images/us.jpg' | relative_url }}" alt="Our Family - RoadTripp Adventures">
    </div>
    <p class="lead">Welcome to our family travel blog, where we document our multi-day road trips and share the joy of exploring our beautiful country together.</p>
  </div>
  
  <div class="about-content">
    <div class="about-section">
      <h2>Our Family</h2>
      <p>We're a family of four who believes that the best way to see the world is from the road. With two kids who love adventure and parents who cherish quality time away from the daily hustle, road trips have become our favorite way to explore, learn, and create lasting memories together.</p>
      
      <p>What started as weekend getaways has evolved into epic multi-day adventures that have taken us to some of the most incredible places in the country. From national parks to hidden gems, quirky roadside attractions to breathtaking natural wonders, we're always planning our next adventure.</p>
    </div>
    
    <div class="about-section">
      <h2>Why Road Trips?</h2>
      <ul>
        <li><strong>Freedom & Flexibility:</strong> Travel at our own pace, make spontaneous stops, and change plans when we discover something amazing</li>
        <li><strong>Quality Time:</strong> Hours of conversation, games, and bonding time that you just can't get any other way</li>
        <li><strong>Educational:</strong> Every trip is a learning opportunity - history, geography, science, and culture come alive</li>
        <li><strong>Budget-Friendly:</strong> Road trips can be incredibly economical while still providing incredible experiences</li>
        <li><strong>Comfort:</strong> Bring everything we need, stop when we want, and enjoy the journey as much as the destination</li>
      </ul>
    </div>
    
    <div class="about-section">
      <h2>What You'll Find Here</h2>
      <p>Our blog features detailed day-by-day itineraries of our family road trips, complete with:</p>
      <ul>
        <li>Detailed daily schedules and activities</li>
        <li>Photo galleries from each day</li>
        <li>Accommodation recommendations and reviews</li>
        <li>Family-friendly activity suggestions</li>
        <li>Tips for traveling with kids</li>
        <li>Budget breakdowns and money-saving tips</li>
        <li>Packing lists and travel essentials</li>
        <li>Route recommendations and scenic stops</li>
      </ul>
    </div>
    
    <div class="about-section">
      <h2>Planning Your Own Adventure</h2>
      <p>We hope our experiences inspire you to hit the road with your own family! Every trip we share includes practical information you can use to plan your own version of the adventure. Remember, the best family road trip is the one that works for YOUR family - adapt our suggestions to fit your interests, budget, and timeline.</p>
      
      <p>Have questions about any of our trips? Want specific recommendations for traveling to a destination we've visited? Feel free to reach out - we love helping other families plan their own road trip adventures!</p>
    </div>
    
    <div class="about-section">
      <h2>Our Travel Philosophy</h2>
      <blockquote>
        "The journey matters as much as the destination. It's not about checking boxes or seeing everything - it's about connecting with each other, appreciating the incredible diversity of our country, and creating stories we'll tell for years to come."
      </blockquote>
    </div>
    
    <div class="about-cta">
      <h2>Join Us on the Road</h2>
      <p>Ready to start planning your own family road trip adventure? Browse our trip timeline, get inspired by our itineraries, and don't forget to share your own adventures with us!</p>
      <a href="{{ '/' | relative_url }}" class="btn btn-primary">Explore Our Trips</a>
    </div>
  </div>
</div>

<style>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.about-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--bg-light-blue), var(--bg-light-green));
  border-radius: var(--border-radius);
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.family-photo {
  margin: 2rem 0;
  text-align: center;
}

.family-photo img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: var(--shadow-medium);
  transition: var(--transition);
}

.family-photo img:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-strong);
}

.lead {
  font-size: 1.3rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

.about-content {
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.about-section {
  margin-bottom: 2.5rem;
}

.about-section h2 {
  color: var(--primary-color);
  border-bottom: 2px solid var(--bg-off-white);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.about-section ul {
  padding-left: 0;
  list-style: none;
}

.about-section li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.about-section li::before {
  content: '✈️';
  position: absolute;
  left: 0;
  top: 0.5rem;
}

blockquote {
  background: var(--bg-light-blue);
  padding: 1.5rem;
  border-left: 4px solid var(--accent-color);
  margin: 1.5rem 0;
  font-style: italic;
  border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
}

.about-cta {
  text-align: center;
  padding: 2rem;
  background: var(--bg-off-white);
  border-radius: var(--border-radius);
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .family-photo img {
    width: 200px;
    height: 200px;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}
</style>