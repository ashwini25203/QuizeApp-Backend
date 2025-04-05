const Assignment = require('../models/assignmentModel');

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching assignments', error: err.message });
  }
};

exports.postAssignment = async (req, res) => {
  try { 
    const newAssignment = await Assignment.create(req.body);
    res.status(201).json({ message: 'Assignment added', assignment: newAssignment });
  } catch (err) {
    res.status(500).json({ message: 'Error saving assignment', error: err.message });
  }
};



