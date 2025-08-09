"use client";

import { useState } from "react";
import { Navigation } from "../components/Header";
import { Footer } from "../components/Footer";
import { StandardizedCTA } from "../components/StandardizedCTA";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Users,
  MessageCircle,
  Star,
  Heart,
  TrendingUp,
  Award,
  Calendar,
  ThumbsUp,
  Share2,
  Flag,
  Search,
  Filter,
  DollarSign,
  Building,
  MapPin,
  Clock,
  User,
  Crown,
} from "lucide-react";

export default function CommunityPage() {
  const [postContent, setPostContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigateToHomepage = () => (window.location.href = "/");
  const handleNavigateToInternalSearch = () =>
    (window.location.href = "/internal-search");
  const handleNavigateToComparePrices = () =>
    (window.location.href = "/compare-prices");
  const handleNavigateToPriceComparison = () =>
    (window.location.href = "/price-comparison");
  const handleNavigateToSearchByProcedure = () =>
    (window.location.href = "/search-procedure");
  const handleNavigateToFAQ = () => (window.location.href = "/faq");
  const handleNavigateToBlog = () => (window.location.href = "/blog");
  const handleNavigateToExplore = () => (window.location.href = "/explore");
  const handleNavigateToExploreByLocation = () =>
    (window.location.href = "/locations");
  const handleNavigateToInsights = () => (window.location.href = "/insights");
  const handleNavigateToPatientResources = () =>
    (window.location.href = "/learn");
  const handleNavigateToTools = () => (window.location.href = "/tools");
  const handleNavigateToCommunity = () => (window.location.href = "/community");
  const handleNavigateToProfessionals = () =>
    (window.location.href = "/professionals");
  const handleNavigateToDisclosures = () =>
    (window.location.href = "/disclosures");
  const handleCTAAssistant = () => (window.location.href = "/tools");

  const communityStats = [
    {
      label: "Active Members",
      value: "25.2K",
      icon: Users,
      color: "text-blue-600",
    },
    {
      label: "Stories Shared",
      value: "8.7K",
      icon: MessageCircle,
      color: "text-green-600",
    },
    {
      label: "Money Saved",
      value: "$42M",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      label: "Hospitals Rated",
      value: "3.2K",
      icon: Building,
      color: "text-orange-600",
    },
  ];

  const recentStories = [
    {
      id: 1,
      title: "Reduced my $18,000 surgery bill to $3,000",
      author: "Sarah M.",
      category: "Success Story",
      savings: "$15,000",
      likes: 147,
      comments: 23,
      timeAgo: "2 hours ago",
      excerpt:
        "After my appendectomy, I received a shocking bill. Using the negotiation strategies from this community, I was able to get it reduced by 83%...",
      featured: true,
    },
    {
      id: 2,
      title: "How I found billing errors that saved me $5,200",
      author: "Michael R.",
      category: "Bill Review",
      savings: "$5,200",
      likes: 89,
      comments: 12,
      timeAgo: "5 hours ago",
      excerpt:
        "I followed the bill review checklist and found duplicate charges, incorrect dates, and services I never received...",
      featured: false,
    },
    {
      id: 3,
      title: "Charity care application approved - $22,000 forgiven",
      author: "Jennifer L.",
      category: "Financial Aid",
      savings: "$22,000",
      likes: 203,
      comments: 34,
      timeAgo: "1 day ago",
      excerpt:
        "I was hesitant to apply for charity care, but the community encouraged me. The hospital forgave my entire balance...",
      featured: true,
    },
    {
      id: 4,
      title: "Negotiated payment plan for cancer treatment",
      author: "David K.",
      category: "Payment Plans",
      savings: "Payment Plan",
      likes: 156,
      comments: 28,
      timeAgo: "2 days ago",
      excerpt:
        "Facing $50,000 in treatment costs, I worked with the hospital to create a manageable payment plan...",
      featured: false,
    },
  ];

  const topContributors = [
    {
      name: "HealthAdvocate_2021",
      points: 15420,
      badge: "Expert",
      stories: 47,
    },
    { name: "BillNinja", points: 12850, badge: "Veteran", stories: 38 },
    { name: "SaverSarah", points: 11200, badge: "Helper", stories: 34 },
    { name: "TransparencyTom", points: 9680, badge: "Helper", stories: 29 },
    { name: "CostCutter", points: 8450, badge: "Active", stories: 25 },
  ];

  const hospitalLeaderboard = [
    {
      name: "Boston Medical Center",
      city: "Boston, MA",
      transparencyScore: 96,
      userRating: 4.8,
      reviews: 234,
      rank: 1,
    },
    {
      name: "Seattle Children's Hospital",
      city: "Seattle, WA",
      transparencyScore: 94,
      userRating: 4.9,
      reviews: 187,
      rank: 2,
    },
    {
      name: "Denver Health Medical Center",
      city: "Denver, CO",
      transparencyScore: 91,
      userRating: 4.6,
      reviews: 156,
      rank: 3,
    },
    {
      name: "Cleveland Clinic",
      city: "Cleveland, OH",
      transparencyScore: 89,
      userRating: 4.7,
      reviews: 298,
      rank: 4,
    },
  ];

  const forumTopics = [
    {
      title: "Bill Negotiation Success Stories",
      posts: 1247,
      replies: 8934,
      activity: "2 min ago",
    },
    {
      title: "Insurance Claims & Appeals",
      posts: 892,
      replies: 5621,
      activity: "12 min ago",
    },
    {
      title: "Financial Aid Applications",
      posts: 734,
      replies: 4532,
      activity: "35 min ago",
    },
    {
      title: "Hospital Experiences & Reviews",
      posts: 1456,
      replies: 9823,
      activity: "1 hour ago",
    },
    {
      title: "Medical Billing Errors",
      posts: 623,
      replies: 3876,
      activity: "2 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        onNavigateToHomepage={handleNavigateToHomepage}
        onNavigateToInternalSearch={handleNavigateToInternalSearch}
        onNavigateToComparePrices={handleNavigateToComparePrices}
        onNavigateToPriceComparison={handleNavigateToPriceComparison}
        onNavigateToSearchByProcedure={handleNavigateToSearchByProcedure}
        onNavigateToFAQ={handleNavigateToFAQ}

        onNavigateToExplore={handleNavigateToExplore}
        onNavigateToExploreByLocation={handleNavigateToExploreByLocation}
        onNavigateToInsights={handleNavigateToInsights}
        onNavigateToPatientResources={handleNavigateToPatientResources}
        onNavigateToTools={handleNavigateToTools}
        onNavigateToCommunity={handleNavigateToCommunity}
        onNavigateToProfessionals={handleNavigateToProfessionals}
        currentPage="community"
      />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Healthcare Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Connect with others, share your experiences, and learn from a
                community of 25,000+ people navigating healthcare costs
                together.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search stories, discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-white">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="stories" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="stories">Success Stories</TabsTrigger>
                  <TabsTrigger value="forums">Forums</TabsTrigger>
                  <TabsTrigger value="leaderboards">Leaderboards</TabsTrigger>
                  <TabsTrigger value="share">Share Your Story</TabsTrigger>
                </TabsList>

                <TabsContent value="stories" className="mt-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Stories Feed */}
                    <div className="lg:col-span-2 space-y-6">
                      {recentStories.map((story) => (
                        <Card
                          key={story.id}
                          className={`${story.featured ? "border-primary" : ""} hover:shadow-lg transition-shadow`}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <Badge
                                  variant={
                                    story.featured ? "default" : "outline"
                                  }
                                >
                                  {story.category}
                                </Badge>
                                {story.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800">
                                    <Crown className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {story.timeAgo}
                              </span>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                              {story.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {story.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  {story.author}
                                </span>
                                {story.savings !== "Payment Plan" && (
                                  <span className="flex items-center gap-1 font-semibold text-green-600">
                                    <DollarSign className="w-4 h-4" />
                                    Saved {story.savings}
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                  <ThumbsUp className="w-4 h-4" />
                                  {story.likes}
                                </button>
                                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                  <MessageCircle className="w-4 h-4" />
                                  {story.comments}
                                </button>
                                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                  <Share2 className="w-4 h-4" />
                                  Share
                                </button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Top Contributors */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            Top Contributors
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {topContributors.map((contributor, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                              >
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                      index === 0
                                        ? "bg-yellow-100 text-yellow-800"
                                        : index === 1
                                          ? "bg-gray-100 text-gray-800"
                                          : index === 2
                                            ? "bg-orange-100 text-orange-800"
                                            : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {index + 1}
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">
                                      {contributor.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {contributor.stories} stories
                                    </p>
                                  </div>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {contributor.badge}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Actions */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Button className="w-full" variant="secondary">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Ask the Community
                          </Button>
                          <Button className="w-full" variant="secondary">
                            <Star className="w-4 h-4 mr-2" />
                            Rate a Hospital
                          </Button>
                          <Button className="w-full" variant="secondary">
                            <Heart className="w-4 h-4 mr-2" />
                            Share Success Story
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="forums" className="mt-8">
                  <div className="space-y-4">
                    {forumTopics.map((topic, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <MessageCircle className="w-8 h-8 text-primary" />
                              <div>
                                <h3 className="font-semibold">{topic.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {topic.posts} posts • {topic.replies} replies
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">
                                Last activity
                              </p>
                              <p className="text-sm font-medium">
                                {topic.activity}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="leaderboards" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Hospital Transparency Leaderboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {hospitalLeaderboard.map((hospital, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                  index === 0
                                    ? "bg-yellow-100 text-yellow-800"
                                    : index === 1
                                      ? "bg-gray-100 text-gray-800"
                                      : index === 2
                                        ? "bg-orange-100 text-orange-800"
                                        : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {hospital.rank}
                              </div>
                              <div>
                                <h3 className="font-semibold">
                                  {hospital.name}
                                </h3>
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {hospital.city}
                                </p>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="flex items-center gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">
                                    Transparency
                                  </p>
                                  <p className="font-semibold text-primary">
                                    {hospital.transparencyScore}%
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">
                                    User Rating
                                  </p>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">
                                      {hospital.userRating}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      ({hospital.reviews})
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="share" className="mt-8">
                  <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle>Share Your Success Story</CardTitle>
                      <p className="text-muted-foreground">
                        Help others by sharing how you saved money or navigated
                        healthcare billing.
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Story Title
                        </label>
                        <Input placeholder="How I reduced my medical bill by..." />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Your Story
                        </label>
                        <Textarea
                          placeholder="Tell us about your experience, what strategies worked, and how much you saved..."
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                          rows={6}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Category
                          </label>
                          <select className="w-full p-2 border rounded-md">
                            <option>Success Story</option>
                            <option>Bill Review</option>
                            <option>Financial Aid</option>
                            <option>Payment Plans</option>
                            <option>Insurance Appeals</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Amount Saved (optional)
                          </label>
                          <Input placeholder="$0" />
                        </div>
                      </div>

                      <Button className="w-full">
                        <Heart className="w-4 h-4 mr-2" />
                        Share Your Story
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <StandardizedCTA
          onCTAAssistant={handleCTAAssistant}
          onNavigateToComparePrices={handleNavigateToComparePrices}
          onNavigateToInternalSearch={handleNavigateToInternalSearch}
        />
      </div>

      <Footer onNavigateToDisclosures={handleNavigateToDisclosures} />
    </div>
  );
}
