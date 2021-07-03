import { Add, Remove } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  prettyBytes from 'pretty-bytes';

const useStyles = makeStyles({
  root: {
    height: '82vh',
    flexGrow: 1,
    width:'40vw',
  },
  container: {
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'radial-gradient(circle, #4752B2 14%,#C7CEFF 64%)',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'radial-gradient(circle, #4752B2 14%,#8B93D6 64%)',
    },
    '&::-webkit-scrollbar-track': {
      background: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: 'inset 7px 10px 12px 0px #F0F0F0',
    },
  },
  label: {
    fontSize: '0.9rem',
    overflowWrap: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
});

export const AppTree = ({ treeData, onImageClickHandler }) => {
  const classes = useStyles();

  const renderTree = (nodes) => {
    return nodes.map((node, i) => (
      <TreeItem key={i} nodeId={node.id.toString()} label={`${node.header} / ${node.subheader}`}
          classes={{label: classes.label}}
      >
        <TreeItem
          nodeId={`${node.id}_${i}_${node.subheader}`}
          label={node.subheader}
          classes={{label: classes.label}}
          icon={<FiberManualRecordIcon style={{ fontSize: '5px' }} />}
        />
        <TreeItem
          nodeId={`${node.id}_${i}_${node.date}`}
          label={node.date}
          classes={{label: classes.label}}
          icon={<FiberManualRecordIcon style={{ fontSize: '5px' }} />}
        />
        <TreeItem
          nodeId={`${node.id}_${i}_${node.filesize}`}
          label={prettyBytes(node.filesize)}
          classes={{label: classes.label}}
          icon={<FiberManualRecordIcon style={{ fontSize: '5px' }} />}
        />
        <TreeItem
          nodeId={`${node.id}_${i}_${node.filename}`}
          label={node.filename}
          classes={{label: classes.label}}
          icon={<img src={node.image} alt={node.header} width={20} height={20} />}
          onClick={(e) => onImageClickHandler(e, node.image, node.header)}
        />
      </TreeItem>
    ));
  };
  return (
    <div className={classes.container}>
      <TreeView
        className={classes.root}
        defaultExpandIcon={<Add />}
        defaultCollapseIcon={<Remove />}
        >
        
        {renderTree(treeData)}
      </TreeView>
    </div>
  );
};

AppTree.prototype = {
  treeData: PropTypes.array,
  onImageClickHandler: PropTypes.func
};