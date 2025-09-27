// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// API Helper Functions
class JeevanSetuAPI {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic API call method
  async makeRequest(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      console.log('API: Making request to', url, 'with options:', options);
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      console.log('API: Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API: Response data:', data);
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Request Management
  async getAllRequests() {
    return this.makeRequest('/requests');
  }

  async getRequestById(id) {
    return this.makeRequest(`/requests/${id}`);
  }

  async createRequest(requestData) {
    return this.makeRequest('/requests', {
      method: 'POST',
      body: JSON.stringify(requestData)
    });
  }

  async updateRequestStatus(id, status) {
    console.log('API: Updating request status', { id, status });
    return this.makeRequest(`/requests/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    });
  }

  async deleteRequest(id) {
    return this.makeRequest(`/requests/${id}`, {
      method: 'DELETE'
    });
  }

  // Volunteer Management
  async getVolunteers() {
    return this.makeRequest('/volunteers');
  }

  async updateVolunteerStatus(id, status) {
    return this.makeRequest(`/volunteers/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    });
  }

  // Victim Management
  async getVictims() {
    return this.makeRequest('/victims');
  }

  async createVictim(victimData) {
    return this.makeRequest('/victims', {
      method: 'POST',
      body: JSON.stringify(victimData)
    });
  }

  // Admin Management
  async getAdminStats() {
    return this.makeRequest('/admin/stats');
  }

  async getAdminUsers() {
    return this.makeRequest('/admin/users');
  }
}

// Initialize API instance
const api = new JeevanSetuAPI();

// Utility Functions
function showNotification(message, type = 'success') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)} hour(s) ago`;
  return date.toLocaleDateString();
}

function getPriorityBadge(priority) {
  const badges = {
    'urgent': 'bg-danger',
    'high': 'bg-warning text-dark',
    'medium': 'bg-info text-dark',
    'low': 'bg-secondary'
  };
  return badges[priority] || 'bg-secondary';
}

// Export for use in other files
window.JeevanSetuAPI = JeevanSetuAPI;
window.api = api;
window.showNotification = showNotification;
window.formatTimestamp = formatTimestamp;
window.getPriorityBadge = getPriorityBadge;
