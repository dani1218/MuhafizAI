/**
 * MuhafizAI — Community Scam Radar Data & Real-Time Feed
 */

window.MUHAFIZ_COMMUNITY_FEED = [
  {
    id: "RAD-9812",
    city: "Karachi",
    district: "Gulshan-e-Iqbal",
    type: "wallet",
    category: "Easypaisa Reversal Scam",
    risk: "critical",
    snippet: "Caller claimed accidental Rs. 15,000 transfer, showed fake screenshot, demanded victim send back money immediately.",
    timeAgo: "2 mins ago",
    status: "Blocked by MuhafizAI",
    reportsCount: 14
  },
  {
    id: "RAD-9811",
    city: "Rawalpindi",
    district: "Saddar",
    type: "otp",
    category: "JazzCash MPIN Theft Call",
    risk: "critical",
    snippet: "Urgent call from 0304-xxxxxxx claiming account expiry. Demanded 4-digit biometric verification OTP.",
    timeAgo: "8 mins ago",
    status: "Forwarded to FIA NR3C",
    reportsCount: 39
  },
  {
    id: "RAD-9810",
    city: "Lahore",
    district: "DHA Phase 5",
    type: "phishing",
    category: "HBL Fake Biometric SMS",
    risk: "high",
    snippet: "SMS with link 'http://hbl-auth-pk.com' warning ATM card deactivation within 24 hours.",
    timeAgo: "17 mins ago",
    status: "Domain Blacklisted",
    reportsCount: 52
  },
  {
    id: "RAD-9809",
    city: "Attock",
    district: "Fateh Jang",
    type: "wallet",
    category: "Fake BISP 25k Voice Note",
    risk: "critical",
    snippet: "WhatsApp voice note claiming recipient won BISP 25,000 cash grant, asking 1500 registration fee via Easypaisa.",
    timeAgo: "29 mins ago",
    status: "SIM Flagged",
    reportsCount: 88
  },
  {
    id: "RAD-9808",
    city: "Islamabad",
    district: "F-10 Markaz",
    type: "phishing",
    category: "Meezan Bank NetBanking Clone",
    risk: "high",
    snippet: "WhatsApp text with phishing link 'meezan-smart-login.xyz' sent to senior citizen.",
    timeAgo: "41 mins ago",
    status: "Blocked by MuhafizAI",
    reportsCount: 21
  },
  {
    id: "RAD-9807",
    city: "Faisalabad",
    district: "Madina Town",
    type: "otp",
    category: "WhatsApp Account Takeover",
    risk: "critical",
    snippet: "Attacker sent 6-digit WhatsApp registration code asking user to forward it back under pretense of lottery verification.",
    timeAgo: "1 hour ago",
    status: "Blocked",
    reportsCount: 64
  },
  {
    id: "RAD-9806",
    city: "Peshawar",
    district: "Hayatabad",
    type: "wallet",
    category: "Pak Army Recruitment Fee Scam",
    risk: "high",
    snippet: "Fake job slip sent on WhatsApp asking Rs. 2,500 physical test fee to be transferred to personal JazzCash account.",
    timeAgo: "2 hours ago",
    status: "Reported to PTA & FIA",
    reportsCount: 33
  }
];

class MuhafizCommunityManager {
  constructor() {
    this.feed = [...window.MUHAFIZ_COMMUNITY_FEED];
    this.currentFilter = "all";
    this.blockedCount = 1428;
    this.moneySaved = 4285000;
  }

  getFilteredFeed(filterKey = "all", searchQuery = "") {
    this.currentFilter = filterKey;
    return this.feed.filter(item => {
      const matchesFilter = (filterKey === "all") || (item.type === filterKey);
      const q = (searchQuery || "").toLowerCase();
      const matchesSearch = !q || 
        item.city.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q) || 
        item.snippet.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }

  addNewReport(newReport) {
    const reportObj = {
      id: "RAD-" + Math.floor(1000 + Math.random() * 9000),
      city: newReport.city || "Rawalpindi",
      district: newReport.district || "Downtown",
      type: newReport.type || "wallet",
      category: newReport.category || "Reported Scam Threat",
      risk: newReport.risk || "critical",
      snippet: newReport.snippet || "Suspicious call / SMS reported by user.",
      timeAgo: "Just now",
      status: "Analyzing & Syncing",
      reportsCount: 1
    };

    this.feed.unshift(reportObj);
    this.blockedCount += 1;
    this.moneySaved += 25000;
    return reportObj;
  }
}

window.muhafizCommunity = new MuhafizCommunityManager();
