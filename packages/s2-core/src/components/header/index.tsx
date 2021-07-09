import React, { ReactNode } from 'react';
import { PageHeader } from 'antd';
import { Export, ExportCfgProps } from '../export';
import classNames from 'classnames';
import { BaseSpreadSheet } from '../../sheet-type';

export interface HeaderCfgProps {
  style?: React.CSSProperties;
  className?: string;
  title?: React.ReactNode;
  description?: string;
  exportCfg?: ExportCfgProps;
  extra?: ReactNode[];
}

export interface HeaderProps extends HeaderCfgProps {
  sheet: BaseSpreadSheet;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  title,
  description,
  exportCfg = { open: false },
  sheet,
  extra = [],
  ...restProps
}) => {
  const PRECLASS = 'spreadsheet-header';
  const { open } = exportCfg;
  let extraDoms = [];
  if (sheet && open) {
    const exportNode = <Export sheet={sheet} {...exportCfg} />;
    extraDoms = extra.concat([exportNode]);
  }

  return (
    <PageHeader
      className={classNames(PRECLASS, className)}
      ghost={false}
      title={title}
      extra={extraDoms}
      {...restProps}
    >
      {description}
    </PageHeader>
  );
};