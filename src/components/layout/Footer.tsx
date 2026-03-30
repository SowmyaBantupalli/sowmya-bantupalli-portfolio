const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {currentYear} Sowmya Bantupalli. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
          Senior Frontend Developer | Angular &amp; React Expert
        </p>
      </div>
    </footer>
  );
};

export default Footer;
