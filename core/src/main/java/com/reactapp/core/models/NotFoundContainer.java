/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code NotFoundContainer} Sling Model used for the {@code reactapp/components/not-found-container} component.
 * 
 */
@ConsumerType
public interface NotFoundContainer
    extends ComponentExporter
{


    @JsonProperty("imageContainer")
    Image getImageContainer();

    @JsonProperty("titleNotFound")
    String getTitleNotFound();

    @JsonProperty("descriptNotFound")
    String getDescriptNotFound();

    @JsonProperty("buttonNotFound")
    String getButtonNotFound();

}
