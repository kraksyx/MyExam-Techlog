const questions = [
  {
   question: "What is the main purpose of the Technical Log?",
    options: { a: "To log fuel prices at different airports", b: "To schedule pilot training activities", c: "To record aircraft defects, maintenance, and operating information" },
    answer: "c"
  },
  {
   question: "Who is responsible for checking the Technical Log before engine start?",
    options: { a: "All flight crew members, including students on solo flights", b: "Only the instructor", c: "Ground maintenance crew" },
    answer: "a"
  },
  {
  
    question: "What does the PIC certify when signing the 'Aircraft Technical Log Sector Record'?",
    options: { a: "That the aircraft has been washed and cleaned", b: "Satisfaction with the Pre-Flight Inspection and Fuel/Oil status", c: "That the crew is well-rested" },
    answer: "b"
  },
  {
   
    question: "Who can certify that a defect has been rectified and release the aircraft back to service?",
    options: { a: "The PIC", b: "A certified engineer", c: "A senior student pilot" },
    answer: "b"
  },
  {
   
    question: "What happens if a flight crew enters a defect in the log?",
    options: { a: "The aircraft can continue operating without checks", b: "The log is reviewed after the flight ends", c: "The Certificate of Airworthiness is invalid until it is cleared or deferred" },
    answer: "c"
  },
  {
  
    question: "Why must PICs check the hours remaining before every flight?",
    options: { a: "To check fuel consumption", b: "To schedule rest periods for the crew", c: "To avoid exceeding the hours available before the next inspection" },
    answer: "c"
  },
  {
   
    question: "What should be done if the total flight time plus current hours are within one hour of a scheduled maintenance?",
    options: { a: "Complete the flight and report it later", b: "Add a note in the log and proceed", c: "Contact maintenance and do not accept the airplane" },
    answer: "c"
  },
  {
   
    question: "Who is responsible for ensuring previous defects have been cleared or deferred before accepting the aircraft?",
    options: { a: "The engineer", b: "Air Traffic Control", c: "The PIC" },
    answer: "c"
  },
  {
 
    question: "What should be written in the Tech Log if there are no defects after a flight sector?",
    options: { a: "CLEARED", b: "NIL DEFECTS", c: "OK TO FLY" },
    answer: "b"
  },
  {
  
    question: "If a defect is found after the acceptance has been signed, where should it be recorded?",
    options: { a: "On a new Techlog page", b: "Only in the pilot's personal logbook", c: "In the previous Techlog entry" },
    answer: "a"
  },
  {
   
    question: "When is it acceptable for some aircraft equipment to be inoperative?",
    options: { a: "When it's not required for airplane safety and allowed under MEL", b: "During night flights only", c: "When the crew agrees" },
    answer: "a"
  },
  {
 
    question: "Who makes defect entries in the Tech Log for student pilots?",
    options: { a: "Only the maintenance staff", b: "The student in consultation with their FI or DFI", c: "The air traffic controller" },
    answer: "b"
  },
  {
   
    question: "What are Deferred Defects?",
    options: { a: "Defects that don’t affect operational capability and can be fixed later", b: "Defects that are ignored until they become serious", c: "Temporary notes in the flight plan" },
    answer: "a"
  },
  {
  
    question: "Who is responsible for completing post-flight documentation?",
    options: { a: "The ground staff", b: "The PIC", c: "The co-pilot only" },
    answer: "b"
  },
  {
 
    question: "What times must the PIC record after every flight?",
    options: { a: "Off-block to on-block only", b: "Off-Blocks, Takeoff, Landing, and On-Blocks times", c: "Meal breaks and fuel stops" },
    answer: "b"
  },
  {
   
    question: "What should be done if defects are recorded post-flight?",
    options: { a: "Skip entry if they’re minor issues", b: "Note them verbally to maintenance", c: "Enter them in the defect column and remove the Techlog to the stores counter" },
    answer: "c"
  },
  {
  
    question: "How should the Technical Log be filled out?",
    options: { a: "As quickly as possible", b: "Accurately, legibly, and in full", c: "Only in shorthand" },
    answer: "b"
  },
  {
  
    question: "What time format is used for takeoff and landing times?",
    options: { a: "Pilot's watch time", b: "UTC (Coordinated Universal Time)", c: "Local Time" },
    answer: "b"
  },
  {
  
    question: "What defines 'Flight Time'?",
    options: { a: "Time the crew is onboard", b: "Time from first engine start to shut down", c: "Time from takeoff to landing" },
    answer: "b"
  },
  {
  
    question: "What defines 'Block Time'?",
    options: { a: "The time the aircraft is in the hangar", b: "Time from parking brake to engine off", c: "Time from OFF blocks to ON blocks" },
    answer: "c"
  },
  {
   
    question: "What must all crew check in the Technical Log before each flight?",
    options: { a: "The destination fuel policy", b: "The weather radar status", c: "The maintenance statement page for pending tasks" },
    answer: "c"
  },
  {
  
    question: "When the PIC enters a defect, what else must be included in the entry?",
    options: { a: "Flight number and airport code", b: "Initials, full printed name, and staff number in capital letters", c: "Phone number for contact" },
    answer: "b"
  },
  {

    question: "How should the times recorded in the logbook, tech log, and flight plan compare?",
    options: { a: "They must all match exactly", b: "Only the logbook needs accurate times", c: "They may differ slightly" },
    answer: "a"
  },
  {
  
    question: "After recording flight times, where must they also be entered?",
    options: { a: "In the pilot’s notebook", b: "In the engine log only", c: "Into TALON ETA system" },
    answer: "c"
  },
  {
 
    question: "What must be used for each flight sector?",
    options: { a: "A pilot report", b: "A new aircraft registration", c: "At least one sector page" },
    answer: "c"
  },
  {
  
    question: "Who is responsible for completing the Data blocks for an inbound flight?",
    options: { a: "Ground engineer", b: "Captain of the inbound flight", c: "First Officer" },
    answer: "b"
  },
  {

    question: "Which information must be completed in the Data blocks?",
    options: { a: "Fuel consumption rate", b: "Weather details", c: "Aircraft type, registration, flight number, and IATA station codes" },
    answer: "c"
  },
  {

    question: "What should be done for Flight type on the log?",
    options: { a: "Circle Y or N", b: "Write 'Yes' or 'No'", c: "Leave it blank" },
    answer: "a"
  },
  {
   
    question: "Which times must be entered in UTC format?",
    options: { a: "Off blocks, takeoff, land, and on blocks", b: "Cruise speed", c: "Departure date and arrival time" },
    answer: "a"
  },
  {

    question: "What are extra landings?",
    options: { a: "Landings more than one in a flight, mainly for training", b: "Emergency landings", c: "Landings with passengers only" },
    answer: "a"
  },
  {
   
    question: "How is sector time calculated?",
    options: { a: "Total flying hours minus rest period", b: "On blocks minus off blocks", c: "Land time minus takeoff time" },
    answer: "b"
  },
  {
   
    question: "What must be transferred from the previous log page?",
    options: { a: "Departure date", b: "Current total hours", c: "Weather report" },
    answer: "b"
  },
  {
 
    question: "How is the current total hours for the flight calculated?",
    options: { a: "Flight duration minus taxi time", b: "SECTOR TIME + PREVIOUS LOG HOURS BROUGHT FORWARD", c: "Fuel used multiplied by hours flown" },
    answer: "b"
  }
];
