import React from 'react'
import { node, func, shape, string, arrayOf, bool } from 'prop-types'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { ListItem, ListItemIcon } from 'material-ui/List'
import { Icon } from 'src/lib/components/Icon'
import Avatar from 'material-ui/Avatar'
import Collapse from 'material-ui/transitions/Collapse'
import { CircledIcon } from 'src/lib/components/CircledIcon'
import { colors } from 'src/colors'
import { Loader } from 'src/global/components/Loader'
import { routes } from 'src/lib/services/Routes'
import store from 'store'

import { cn } from './Menu.style'

import logoTemplates from '../../projects/assets/templates.png'
import logoQa from '../../projects/assets/qa.png'
import logoGhost from '../../projects/assets/ghost.png'
import logoBorken from '../../projects/assets/borken.png'
import logoColumbia from '../../projects/assets/columbia.png'
import logoDemo from '../../projects/assets/demo.png'
import logoEdinburgh from '../../projects/assets/edinburgh.png'
import logoForthValley from '../../projects/assets/forthvalley.png'
import logoHowardCounty from '../../projects/assets/howardcounty.png'
import logoInverness from '../../projects/assets/inverness.png'
import logoLagoa from '../../projects/assets/lagoa.png'
import logoRaleigh from '../../projects/assets/raleigh.png'
import logoRichmond from '../../projects/assets/richmond.png'
import logoRioMaior from '../../projects/assets/riomaior.png'
import logoStCharles from '../../projects/assets/stcharles.png'
import logoSummitCounty from '../../projects/assets/summitcounty.png'
import logoTartu from '../../projects/assets/tartu.png'
import logoValley from '../../projects/assets/valley.png'


export class Menu extends React.Component {
  static userToken

  static propTypes = {
    redirectSet: func.isRequired,
    children: node.isRequired,
    models: arrayOf(
      shape({
        id: string.isRequired,
        apiId: string.isRequired,
        title: string.isRequired,
      })
    ).isRequired,
    entries: arrayOf(
      shape({
        modelId: string.isRequired,
      })
    ).isRequired,
    project: shape({
      name: string.isRequired,
      image: string.isRequired,
    }).isRequired,
    conflicts: arrayOf(
      shape({
        id: string.isRequired,
        conflict: bool.isRequired,
      })
    ).isRequired,
    projectId: string.isRequired,
  }

  state = {
    open: true,
    contentExpanded: false,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })

  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  contentClick() {
    this.setState({ contentExpanded: !this.state.contentExpanded })
  }

  render() {
    this.userToken = store.get('token')

    const { children, redirectSet, models, entries, conflicts, projectId, project } = this.props
    const { open, contentExpanded } = this.state
    return (
      <div className={cn.pageContainer}>
        <div className={cn.pageInner}>
          <Avatar
            className={open ? `${cn.arrow} ${cn.arrowOpen}` : `${cn.arrow} ${cn.arrowClose}`}
            onClick={open ? () => this.handleDrawerClose() : () => this.handleDrawerOpen()}
          >
            {open ? <Icon type="menu-close" /> : <Icon type="menu-open" />}
          </Avatar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(cn.menuContainer, !open && cn.menuContainerClosed),
            }}
            open={open}
          >
            <div className={cn.menuInner}>
              <List className={cn.menuHeader} onClick={() => redirectSet(routes.projects())}>
                <ListItem className={cn.menuHeaderInner}>
                  {project.name === 'Template' && <ListItemIcon><Avatar src={logoQa} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'QA' && <ListItemIcon><Avatar src={logoQa} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Ghost' && <ListItemIcon><Avatar src={logoGhost} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Borken' && <ListItemIcon><Avatar src={logoBorken} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Columbia' && <ListItemIcon><Avatar src={logoColumbia} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Demo' && <ListItemIcon><Avatar src={logoDemo} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Edinburgh' && <ListItemIcon><Avatar src={logoEdinburgh} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'ForthValley' && <ListItemIcon><Avatar src={logoForthValley} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'HowardCounty' && <ListItemIcon><Avatar src={logoHowardCounty} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Inverness' && <ListItemIcon><Avatar src={logoInverness} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Lagoa' && <ListItemIcon><Avatar src={logoLagoa} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Raleigh' && <ListItemIcon><Avatar src={logoRaleigh} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Richmond' && <ListItemIcon><Avatar src={logoRichmond} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'RioMaior' && <ListItemIcon><Avatar src={logoRioMaior} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'StCharles' && <ListItemIcon><Avatar src={logoStCharles} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'SummitCounty' && <ListItemIcon><Avatar src={logoSummitCounty} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'Tartu' && <ListItemIcon><Avatar src={logoTartu} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  {project.name === 'PioneerValley' && <ListItemIcon><Avatar src={logoValley} alt="Project avatar" className={open ? cn.avatarBig : cn.avatarSmall} /></ListItemIcon>}
                  <div className={`${cn.pojectName} text-one-line`}>{project.name}</div>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem
                  button
                  onClick={() => redirectSet(routes.index(projectId))}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isIndex(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-item-home" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Home</div>
                </ListItem>
                {this.userToken === "5f60d9eb07044a754b95a33b" ? <ListItem
                  button
                  onClick={() => redirectSet(routes.models(projectId))}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isModels(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-item-models" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Models</div>
                </ListItem> : undefined}
                <ListItem
                  button
                  onClick={() => this.contentClick()}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isEntries(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-item-content" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Entries</div>
                  {contentExpanded ? (
                    <Icon type="menu-item-content-close" color={colors.white.main} />
                  ) : (
                      <Icon type="menu-item-content-open" color={colors.white.main} />
                    )}
                </ListItem>
                <Collapse in={contentExpanded} unmountOnExit>
                  {!models || !entries
                    ? null
                    : models.map(
                      (model, i) =>
                        open ? (
                          <ListItem
                            button
                            className={classNames(cn.menuSubItem, {
                              selected: routes.isEntries(projectId),
                              subSelected: routes.isExactEntry(projectId, model.id),
                            })}
                            key={model.id}
                            onClick={() => redirectSet(routes.entries(projectId, model.id))}
                          >
                            <ListItemIcon>
                              {entries
                                .filter(entry => entry.modelId === model.id)
                                .some(
                                  entry => conflicts.filter(item => item.id === entry.id)[0].conflict
                                ) ? (
                                  <CircledIcon size={20} color={colors.error.main}>
                                    <Icon
                                      type="menu-item-content-exclamation"
                                      color={colors.white.main}
                                      size={14}
                                    />
                                  </CircledIcon>
                                ) : (
                                  <Icon type="menu-item-content-model" color={colors.white.main} size={20} />
                                )}
                            </ListItemIcon>
                            <div className={cn.menuSubItemTextExpanded}>{model.title}</div>
                            <div className={cn.menuSubItemCounter}>
                              {entries.filter(item => item.modelId === model.id).length}
                            </div>
                          </ListItem>
                        ) : (
                            <ListItem
                              button
                              key={model.id}
                              onClick={() => redirectSet(routes.entries(projectId, model.id))}
                              className={classNames(cn.menuSubItemCollapsed, {
                                selected: routes.isEntries(projectId),
                                subSelected: routes.isExactEntry(projectId, model.id),
                              })}
                            >
                              <div className={cn.menuSubItemTextColapsed}>{model.title}</div>
                            </ListItem>
                          )
                    )}
                </Collapse>

                {this.userToken === "5f60d9eb07044a754b95a33b" ? <ListItem
                  button
                  onClick={() => redirectSet(routes.users(projectId))}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isUsers(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-users" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Users</div>
                </ListItem> : undefined}

                {this.userToken === "5f60d9eb07044a754b95a33b" ? <ListItem
                  button
                  onClick={() => redirectSet(routes.tokens(projectId))}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isTokens(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-item-tokens" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Api keys</div>
                </ListItem> : undefined}
                {this.userToken === "5f60d9eb07044a754b95a33b" ? <ListItem
                  button
                  onClick={() => redirectSet(routes.explorer(projectId))}
                  className={classNames(cn.menuItem, open ? '' : cn.menuItemColapsed, {
                    selected: routes.isExplorer(projectId),
                  })}
                >
                  <ListItemIcon>
                    <CircledIcon
                      className={`${cn.menuItemAva} ${open ? '' : cn.menuItemAvaColapsed}`}
                      size={open ? 44 : 36}
                      color={colors.black.t5}
                    >
                      <Icon type="menu-item-explorer" size={open ? 22 : 20} color={colors.white.main} />
                    </CircledIcon>
                  </ListItemIcon>
                  <div className={`${cn.menuItemText} text-one-line`}>Api explorer</div>
                </ListItem> : undefined}



              </List>
              <Loader />
            </div>
          </Drawer>
          <main className={cn.content}>{children}</main>
        </div>
      </div>
    )
  }
}
