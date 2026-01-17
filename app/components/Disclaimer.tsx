'use client';

import { config } from '@/app/config';

export default function Disclaimer() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <div className="py-3">
          <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
            <span className="font-semibold" style={{ color: config.primaryColor }}>
              ⓘ Avertissement:
            </span>
            {' '}Ce site n'appartient pas et n'a aucun lien avec BoursoBank. 
            Je partage mon code de parrainage personnel à titre informatif.
          </p>
        </div>
      </div>
    </div>
  );
}
