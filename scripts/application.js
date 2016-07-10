import ApplicationService from './services/applicationService';

const applicationService = new ApplicationService(document.getElementById('application'));
applicationService.init();
