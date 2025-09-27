const express = require('express');
const router = express.Router();

// Sample data structure for emergency requests
let requests = [
  {
    id: 1,
    type: 'medical',
    location: 'Mumbai, Maharashtra',
    description: 'Need immediate medical assistance',
    status: 'pending',
    timestamp: new Date(),
    contact: '+91-9876543210'
  },
  {
    id: 2,
    type: 'rescue',
    location: 'Delhi, Delhi',
    description: 'Stuck in building collapse',
    status: 'in_progress',
    timestamp: new Date(),
    contact: '+91-9876543211'
  }
];

// GET all requests
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: requests,
    count: requests.length
  });
});

// GET single request by ID
router.get('/:id', (req, res) => {
  const request = requests.find(r => r.id === parseInt(req.params.id));
  if (!request) {
    return res.status(404).json({
      success: false,
      message: 'Request not found'
    });
  }
  res.json({
    success: true,
    data: request
  });
});

// POST new request
router.post('/', (req, res) => {
  const { type, location, description, contact } = req.body;
  
  if (!type || !location || !description) {
    return res.status(400).json({
      success: false,
      message: 'Type, location, and description are required'
    });
  }

  const newRequest = {
    id: requests.length + 1,
    type,
    location,
    description,
    contact: contact || 'Not provided',
    status: 'pending',
    timestamp: new Date()
  };

  requests.push(newRequest);
  
  res.status(201).json({
    success: true,
    data: newRequest,
    message: 'Request created successfully'
  });
});

// PUT update request status
router.put('/:id', (req, res) => {
  const request = requests.find(r => r.id === parseInt(req.params.id));
  if (!request) {
    return res.status(404).json({
      success: false,
      message: 'Request not found'
    });
  }

  const { status } = req.body;
  if (status && ['pending', 'in_progress', 'completed', 'cancelled'].includes(status)) {
    request.status = status;
    request.updatedAt = new Date();
  }

  res.json({
    success: true,
    data: request,
    message: 'Request updated successfully'
  });
});

// DELETE request
router.delete('/:id', (req, res) => {
  const requestIndex = requests.findIndex(r => r.id === parseInt(req.params.id));
  if (requestIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Request not found'
    });
  }

  requests.splice(requestIndex, 1);
  res.json({
    success: true,
    message: 'Request deleted successfully'
  });
});

module.exports = router;

