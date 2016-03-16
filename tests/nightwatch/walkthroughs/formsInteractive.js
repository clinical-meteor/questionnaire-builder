var userA = {
  fullName: "Gregory House",
  email: "house@test.org",
  username: "house",
  password: "house",
};

var bloodSpecimenRecord = {
  patientId: "DTB‑999",
  timepoint: "Baseline",
  drawDate: "01/01/2015",
  crcAtCollection: "lorem ipsum"
};

var histologyAssessmentRecord = {
  sampleId: "DTB‑999",
  core: "A",
  blockImage: "1",
  referenceSlideNumber: "1",
  referenceSlideImages: "1",
  blockStatus: "negative"
};

var histologyResearchRecord = {
  sampleId: "DTB‑999",
  patientId: "DTB‑999",
  histologyCall: "Adeno",
  adeno: "Adeno",
  smallCell: "Not Small Cell",
  trichotomy: "Adeno"
};

var laserCaptureRecord = {
  patientId: "DTB‑999",
  sampleId: "DTB‑999",
  core: "A",
  completionDate: "01/01/2015",
  slideNumber: "1",
  estimatedTotalCaptureArea: "1",
  lysates: "1",
  lystatesVolume: "50",
  downstreamUse: "RNA analysis"
};

var pathologyRecord = {
  patientId: "DTB‑999",
  sampleId: "DTB‑999",
  tumorContent: "5%",
  preliminaryHistology: "Adenocarcinoma",
  finalHistology: "ANPC",
  arFishIhc: "Positive",
  psaIhc: "Positive",
  chgaIhc: "Positive",
  chgaTestPerformed: "Performed",
  arFishPerformed: "Performed",
  arChromosomeXRatio: "1",
  ionTorrentTestPerformed: "Yes",
  ptenIhc: "Positive",
  ptenTestPerformed: "Performed"
};

var rnaSequenceRecord = {
  patientId: "DTB‑999",
  lncapControlSource: "foo",
  qcReports: "lorem ipsum",
  rinScoreFromUcsf: "1",
  dateCompleted: "01/01/2015",
  dateReceived: "01/01/2015",
  libraryPrepUsed: "NuGen stranded",
  libraryPrepNotes: "lorem ipsum",
  locationOfFastqFile: "lorem ipsum",
  lncapControlSource: ""
};

var tissueSpecimenRecord = {
  sampleId: "DTB‑999",
  timepoint: "Baseline",
  procedureDate: "01/01/2015",
  attendingRadiologist: "Dr. Foo",
  crcAtCollection: "Foo",
  numberOfCores: "1",
  coresId: "A",
  coresCore: "Frozen",
  fixedCoreShipDate: "01/01/2015",
  freezer: "foo",
  boxId: "foo123",
  coreNotes: "lorem ipsum",
  timepointNotes: "lorem ipsum"
};

var patientEnrollmentRecord = {
  patientId: "DTB‑999",
  sampleId: '999A',
  institution: "OHSU",
  baselineSampleId: "999A",
  baselineBiopsyDate: "01/01/2015",
  baselineBiopsySite: "Liver",
  progressionSampleId: "999B",
  progressionBiopsyDate: "01/06/2015",
  progressionBiopsySite: "Liver"
};

var screenshotDir = "tests/nightwatch/screenshots/desktop/interactiveForms/";


module.exports = {
  tags: ['forms', 'wcdt', 'interactive'],
  before: function (client){
    client
      .url("http://localhost:3000").pause(1000)
      .dropClinicalFormCollections()
      .initializeQuestionnaires();
  },
  "SignIn" : function (client) {
    client
      .resizeWindow(1024, 1200)
      .reviewMainLayout()
      .saveScreenshot(screenshotDir + "A-MainLayout.png")

      .verify.elementPresent("#usernameLink")
        .click("#usernameLink").pause(1000)
        .saveScreenshot(screenshotDir + "B-SignIn.png")

        .signIn(userA.email, userA.password)
        .saveScreenshot(screenshotDir + "C-HomePage.png");
  },
  "Patient Enrollment Form" : function (client) {
    client
      .navigateToForm('nro')
      .reviewPageTitle("Patient Enrollement")
      .saveScreenshot(screenshotDir + "D-PatientEnrollmentForm.png")
      .reviewPatientEnrollmentForm()
      .completePatientEnrollmentForm(patientEnrollmentRecord)
      .confirmPatientEnrollmentRecordCreated(patientEnrollmentRecord, 1);
  },
  "Histological Research" : function (client) {
    client
      .navigateToForm('l R')
      .reviewPageTitle("Histological Research")
      .saveScreenshot(screenshotDir + "E-HistologyResearchForm.png")
      .reviewHistologyResearchForm()
      .completeHistologyResearchForm(histologyResearchRecord)
      .confirmHistologyResearchRecordCreated(histologyResearchRecord, 1);
  },
  // "Tissue Specimen Form" : function (client) {
  //   client
  //     .selectFromSidebar('#Tissue_Specimen_formButton')
  //     .reviewPageTitle("Tissue_Specimen_form")
  //     .saveScreenshot(screenshotDir + "F-TissueSpecimenForm.png")
  //     .reviewTissueSpecimenForm()
  //     .completeTissueSpecimenForm(tissueSpecimenRecord)
  //     .reviewTissueSpecimenRow(tissueSpecimenRecord, 1);
  // },
  "Blood Specimen Form" : function (client) {
    client
      .navigateToForm('d S')
      .reviewPageTitle("Blood Specimen Form")
      .saveScreenshot(screenshotDir + "G-BloodSpecimenForm.png")
      .reviewBloodSpecimenForm()
      .completeBloodSpecimenForm(bloodSpecimenRecord)
      .confirmBloodSpecimenRecordCreated(bloodSpecimenRecord, 1);
  },
  // "Histological Assessment Form" : function (client) {
  //   client
  //     //.sectionBreak("Histological Assessment Form")
  //     .selectFromSidebar('#Histological_Assessment_formButton')
  //     .reviewPageTitle("Histological_Assessment_form")
  //     .saveScreenshot(screenshotDir + "H-HistologyAssessmentForm.png")
  //     .reviewHistologyAssessmentForm()
  //     .completeHistologyAssessmentForm(histologyAssessmentRecord)
  //     .reviewHistologyAssessmentRow(histologyAssessmentRecord, 1);
  // },
  "Laser Capture Microdissection" : function (client) {
    client
      .navigateToForm('Las')
      .reviewPageTitle("Laser Capture Microdissection")
      .saveScreenshot(screenshotDir + "I-LaserCaptureForm.png")
      .reviewLaserCaptureForm()
      .completeLaserCaptureForm(laserCaptureRecord)
      .confirmLaserCaptureRecordCreated(laserCaptureRecord, 1);
  },
  "RNA Sequence Completion" : function (client) {
    client
      .navigateToForm('RNA')
      .reviewPageTitle("RNA Sequence Completion")
      .saveScreenshot(screenshotDir + "J-RnaSequenceForm.png")
      .reviewRnaSequenceForm()
      .completeRnaSequenceForm(rnaSequenceRecord)
      .confirmRnaSequenceRecordCreated(rnaSequenceRecord, 1);
  },
  "Pathology Form" : function (client) {
    client
      .navigateToForm('Pat')
      .reviewPageTitle("Pathology Report")
      .saveScreenshot(screenshotDir + "K-PathologyForm.png")
      .reviewPathologyForm()
      .completePathologyForm(pathologyRecord)
      .confirmPathologyRecordCreated(pathologyRecord, 1);
  },
  "SignOut" : function (client) {
    client
      .signOut(userA.fullName)
      .end();
  }
};
