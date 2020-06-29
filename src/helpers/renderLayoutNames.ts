const renderLayoutNames = (page: number): string => {
  switch (page) {
    case 0:
      return 'page-sign-in';
    case 1:
      return 'page-register';
    case 2:
      return 'page-forgot-password';
    default:
      return '';
  }
};

export default renderLayoutNames;